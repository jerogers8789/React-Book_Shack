const router = require('express').Router();
const bookRoutes = require('./bookShack');

router.use('/bookshack', bookRoutes);

module.exports = router;