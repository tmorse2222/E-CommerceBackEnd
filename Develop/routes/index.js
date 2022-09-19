// Requires express router
const router = require('express').Router();
// Requires API routes
const apiRoutes = require('./api');
// Set up API routes
router.use('/api', apiRoutes);
// Error route
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});
// Export router
module.exports = router;