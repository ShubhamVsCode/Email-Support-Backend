const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
    },
    platform: {
      type: String,
      enum: ["Query_ineuron", "Pw_Skills"],
    },
    subject: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mailType: {
      type: String,
      enum: ["Non-technical", "Technical", "Feedback", "Escalation"],
    },
    smeName: {
      type: String,
    },
    mailStatus: {
      type: String,
      enum: ["Open", "Close"],
    },
  },
  { timestamps: true }
);

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
