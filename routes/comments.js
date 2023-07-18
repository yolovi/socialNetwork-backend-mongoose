const express = require('express');
const CommentController = require('../controllers/CommentController');
const router = express.Router()
const { authentication, isAuthor } = require("../middleware/authentication");


router.post('/', authentication, CommentController.create);
router.put('/id/:_id', authentication, isAuthor, CommentController.update);
router.put('/likes/:_id', authentication, CommentController.like);
router.delete('/id/:_id', authentication, isAuthor, CommentController.delete)

module.exports = router;