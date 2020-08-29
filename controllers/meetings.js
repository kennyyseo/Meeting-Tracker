const Meeting = require("../models/meeting");
const Note = require("../models/note");

module.exports = {
  index,
  new: newMeeting,
  create,
  show,
  delete: deleteMeeting,
  edit,
  update,
};

function index(req, res) {
  Meeting.find({}, function (err, meetings) {
    res.render("meetings/index", { title: "All Meetings", meetings });
  });
}

function newMeeting(req, res) {
  res.render("meetings/new", { title: "Add Meeting" });
}

function create(req, res) {
  const meeting = new Meeting(req.body);
  meeting.save(function (err) {
    if (err) res.render("/meetings/new");
    res.redirect("/meetings");
  });
}

function deleteMeeting(req, res) {
  Meeting.findByIdAndDelete(req.params.id, function (err) {
    if (err) console.log("Error in deleteMeeting function!");
    res.redirect("/meetings");
  });
}

function edit(req, res) {
  Meeting.findById(req.params.id, function (err, flight) {
    if (err) {
      res.redirect(`/meetings/${req.params.id}`);
    }
    res.render("meetings/edit", {
      meeting,
      title: "Edit Meeting",
    });
  });
}

function update(req, res) {
  Meeting.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (
    err,
    meeting
  ) {
    if (err) {
      res.render("meetings/edit", {
        meeting,
        title: "Edit Meeting",
      });
    }
    res.redirect(`meetings`);
  });
}

function show(req, res) {
  Meeting.findById(req.params.id, function (err, meeting) {
    Note.find({ meeting: meeting._id }, function (err, meetings) {
      res.render("meetings/show", {
        meetings,
        title: "Meeting Details",
        meeting,
      });
    });
  });
}
