// controllers/userController.js
const User = require('../models/user');  // Modèle User
const bcrypt = require('bcryptjs');  // Pour le hachage des mots de passe

// Créer un nouvel utilisateur
const createUser = async (req, res) => {
  try {
    const { nom, prenom, email, password, adresse, numeroTel, role } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = new User({
      nom,
      prenom,
      email,
      password: hashedPassword,
      adresse,
      numeroTel,
      role  // Ajouter le rôle
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createUser };
