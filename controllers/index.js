const router = require('express').Router();

const homeRoutes = require('./home.routes');
const postRoutes = require('./posts.routes');
const tagRoutes = require('./tags.routes');
const profileRoutes = require('./profiles.routes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/posts', postRoutes);
router.use('/topics', tagRoutes);
router.use('/profile', profileRoutes);
router.use('/', homeRoutes);

router.get('*', (req, res) => {
    res.send('<h2>Page Not Found</h2>', 404);
});

module.exports = router;