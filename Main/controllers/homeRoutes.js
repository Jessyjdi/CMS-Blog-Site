const router = require('express').Router();
const { json } = require('body-parser');
const sequelize = require('../config/connection');
const { Post, User, Comments } = require('../models');

// get all posts from Homepage
router.get("/", async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            attributes: [ 'id', 'post_text', 'title', 'created_at'],
            order :[['created_at', 'DESC']],
            include : [
                {model: User, attributes:['username']},
                {model: Comments, attributes:['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include:{
                model: User, attributes:['username']
            }
        }
    ]
});
const posts = dbPostData.map((post => post.get({plain:true})));
res.render('homepage', {
    posts,
    loggedIn: req.session.loggedIn,
    });
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});
 // get post by id
router.get("/post/id", async (req, res) => {
    try {
        const dbPostData = await Post.findOne({
            where: {id: req.params.id},
            attributes: [ 'id', 'post_text', 'title', 'created_at'],
            order :[['created_at', 'DESC']],
            include : [
                {model: User, attributes:['username']},
                {model: Comments, attributes:['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include:{
                model: User, attributes:['username']
            }
        }
    ]
});
if (!dbPostData) {
    res.status(404).json({ message: "No post found with this id!" });
    return;
  }
const posts = dbPostData.map((post => post.get({plain:true})));
res.render('single-post', {
    posts,
    loggedIn: req.session.loggedIn,
    });
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }  
    res.render('login');
  });

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;