const Meeting = require("../models/meeting");

module.exports = {
  create,
  delete: deleteNote,
};

function create(req, res) {
  Meeting.findById(req.params.id, function (err, meeting) {
    req.body.user = req.user;
    meeting.notes.push(req.body);
    meeting.save(function (err) {
      res.redirect(`/meetings/${meeting._id}`);
    });
  });
}

function deleteNote(req, res) {
  Meeting.findById(req.params.meeting, function (err, meeting) {
    meeting.notes.splice(req.params.note, 1);
    meeting.save(function (err) {
      res.redirect(`/meetings/${meeting._id}`);
    });
  });
}
