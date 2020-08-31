const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  content: String,
});

const meetingSchema = new Schema({
  meetingDate: {
    type: Date,
    default: function () {
      return Date.now();
    },
  },
  agency: {
    type: String,
    enum: [
      "Saatchi",
      "Team One",
      "Horizon",
      "Zenith",
      "RPA",
      "Starcom",
      "GP Generate",
      "Other",
    ],
  },
  repsMet: String,
  stage: {
    type: String,
    enum: ["0%", "10%", "30%", "50%", "70%", "90%", "100%"],
  },
  notes: [noteSchema],
  //   user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Meeting", meetingSchema);
