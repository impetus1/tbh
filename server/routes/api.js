const express = require('express');

const router = new express.Router();
/*it is important to remember (for workflow purposes) that this message 
is rendered as post-response to the already rendered dashboard, this 
should be in a redux store because it's sent to secretData in DashboardPage*/
router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "This is a message for people logged in, welcome to Tampa Bay Harvest",
    // user values passed through from auth middleware, again already rendered
    user: req.user
  });
});

module.exports = router;
