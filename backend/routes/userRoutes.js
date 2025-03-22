// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');  // Contrôleur pour créer un utilisateur

// Route POST pour créer un utilisateur
router.post('/', createUser);

module.exports = router;

