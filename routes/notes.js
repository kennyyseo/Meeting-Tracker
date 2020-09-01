const router = require("express").Router();
const notesCtrl = require("../controllers/notes");

router.post("/meetings/:id/notes", notesCtrl.create);
router.delete("/notes/:meeting/:note", notesCtrl.delete);

module.exports = router;
