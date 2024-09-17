const router = require('express').Router();
const userRoutes = require('./user-routes');
const todoRoutes = require('./todo-routes');

router.use('/user', userRoutes);
router.use('/todo', todoRoutes);

module.exports = router;
