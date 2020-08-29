const router = require("express").Router();
const notesCtrl = require("../controllers/notes");

router.post("/meetings/:id/notes", notesCtrl.create);

module.exports = router;
