const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  details: String,
  meeting: {
    type: Schema.Types.ObjectId,
    ref: "Meeting",
  },
});

module.exports = mongoose.model("Note", noteSchema);
