const router = require('express').Router();
const { Art, Artist, User, Cart } = require('../models');
const withAuth = require('../utils/auth');

// Home Page Route
router.get('/', async (req, res) => {
  try {
  
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Dashboard Route
router.get('/dashboard',withAuth, async (req, res) => {
  try {
    
    // Pass serialized data and session flag into template
    res.render('dashboar', { 
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login Page Route
router.get('/login', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout Page Route
router.get('/logout', withAuth, async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('logout');
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
