const mongoose = require("mongoose");

const etudiantSchema = mongoose.Schema({
  cin: {
    type: Number,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
});

module.exports = Etudiant = mongoose.model("etudiant", etudiantSchema);
