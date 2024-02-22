const etudiant = require("../models/etudiant");

async function findAll(req, res) {
  try {
    const etudiants = await etudiant.find();
    res.status(200).json({ etudiants: etudiants });
  } catch (error) {
    console.error("Error retrieving etudiants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function findByID(req, res) {
  try {
    const etudiants = await etudiant.findById(req.params.id);

    if (etudiants) {
      res.status(200).json({ etudiants });
    } else {
      res.status(404).json({ error: "etudiant not found" });
    }
  } catch (error) {
    console.error("Error retrieving etudiants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function addEtudiant(req, res) {
  try {
    const etudiants = await etudiant.create(req.body);
    res.status(200).json({ Etudiant: etudiants, msg: " etudiant created" });
  } catch (error) {
    console.error("Error adding etudiants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateEtudiant(req, res) {
  try {
    const id = req.params.id;
    const updatedEtudiant = await Etudiant.findOneAndUpdate(
      { _id: id },
      req.body, 
      { new: true } 
    );
    if (!updatedEtudiant) {
      return res.status(404).json({ error: "Etudiant not found" });
    }
    res.status(200).json({ Etudiant: updatedEtudiant, msg: "Etudiant updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function deleteEtudiant(req, res) {
  try {
    const id = req.params.id;
    const deletedEtudiant = await etudiant.findOneAndDelete(id);
    res
      .status(200)
      .json({ Etudiant: deletedEtudiant, msg: " Etudiant deleted" });
  } catch (error) {
    res.status(404).json({ error: error });
  }
}

module.exports = {
  findAll,
  addEtudiant,
  findByID,
  deleteEtudiant,
  updateEtudiant,
};
