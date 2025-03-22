const mongoose = require('mongoose');

// Schéma pour l'utilisateur
const userSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  adresse: { type: String, required: true },
  numeroTel: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Modèle User
const User = mongoose.model('User', userSchema);

module.exports = User;
