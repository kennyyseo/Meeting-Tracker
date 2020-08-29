const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  date: Date,
  agency: String,
  repsMet: String,
  stage: String,
  notes: [{ type: Schema.Types.ObjectId, ref: "Notes" }],
});

module.exports = mongoose.model("Meeting", meetingSchema);
