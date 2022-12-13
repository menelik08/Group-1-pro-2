const router = require('express').Router();

const userRoutes = require('./user-routes');
const commentRoute = require('./comment-route');

router.use('/users', userRoutes);
router.use('/comment-route', commentRoute)

module.exports = router;
