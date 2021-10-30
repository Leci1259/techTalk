const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Home Page Route
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: User,
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// get post by id
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('postpage', { post });
    } else {
      res.status(400).json({ message: 'Post Not Found' });
    }
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
    if( req.session.loggedIn) {
      res.redirect('/')
      return;
    }
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});
// Signup Page Route
router.get('/signup', async (req, res) => {
  try {
    if( req.session.loggedIn) {
      res.redirect('/')
      return;
    }
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout Page Route
router.get('/logout', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.render('logout');
    }
    else {
      res.status(400).json({ message: 'Error logging you out' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
