const router = require("express").Router();
const meetingsCtrl = require("../controllers/meetings");

/* GET users listing. */
router.get("/meetings", meetingsCtrl.index);
router.get("/new", meetingsCtrl.new);
router.get("/:id", meetingsCtrl.show);
router.post("/", meetingsCtrl.create);
router.delete("/:id", meetingsCtrl.delete);
router.get("/:id/edit", meetingsCtrl.edit);
router.put("/:id", meetingsCtrl.update);

// router.post("/facts", isLoggedIn, studentsCtrl.addMeeting);

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect("/auth/google");
// }

module.exports = router;
