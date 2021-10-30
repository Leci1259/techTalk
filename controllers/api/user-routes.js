const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

//new user
router.post('/', async (req, res) => {
    try {
      const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
      });
      //login to session
      req.session.save(() => {
        req.session.userId = newUser.id;
        req.session.username = newUser.username;
        req.session.loggedIn = true;
  
        res.json(newUser);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //login user
  router.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!user) {
        res.status(400).json({ message: 'No user account found!' });
        return;
      }
  
      const validPassword = user.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'No user account found!' });
        return;
      }
      //login user
      req.session.save(() => {
        req.session.userId = user.id;
        req.session.username = user.username;
        req.session.loggedIn = true;
  
        res.json({ user, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json({ message: 'No user account found!' });
    }
  });

  //log out
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(200).end();
      });
    } else {
      res.status(400).end();
    }
  });
  
  module.exports = router;