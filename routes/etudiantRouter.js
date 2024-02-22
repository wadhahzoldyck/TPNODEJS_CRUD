var express = require("express");
var router = express.Router();
const etudiantController = require("../controllers/etudiantController");

router.get("/", etudiantController.findAll);
router.get("/:id", etudiantController.findByID);

router.post("/addEtudiant", etudiantController.addEtudiant);
router.put('/updateEtudiant/:id',etudiantController.updateEtudiant)

router.delete("/:id", etudiantController.deleteEtudiant);

module.exports = router;
