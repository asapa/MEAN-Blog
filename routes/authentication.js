const User = require('../models/user');

module.exports = (router) => {

router.post('/register', (req, res) => {

    let user = new User({
      email: req.body.email.toLowerCase(),
      username: req.body.username.toLowerCase(),
      password: req.body.password
    });

    user.save((err) => {

      res.json({
        success: true,
        message: 'Acount registered!'
      });

    });
  }

);

return router; 
}
