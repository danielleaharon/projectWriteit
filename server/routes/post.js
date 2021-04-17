const express = require('express');
const postController = require('../controllers/post')
var router = express.Router();

router.get('/userid/:userId', postController.get);
router.post('/', postController.create);
router.post('/userid/:userId/:postId', postController.updatePost);

router.get('/', postController.getPosts);

router.delete('/userid/:userId/:postId', postController.deletePost);


module.exports = router;