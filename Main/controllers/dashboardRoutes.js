const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comments } = require('../models');
const withAuth = require('../utils/auth')

router.get("/", async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            where: {user_id: req.session.user_id},
            attributes: [ 'id', 'post_text', 'title', 'created_at'],
            include : [
                {model: Comments, attributes:['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include:{ model: User, attributes:['username']}},
                {model: User, attributes:['username']}],
});
const posts = dbPostData.map((post => post.get({plain:true})));
res.render('dashboard', {
    posts,
    loggedIn: req.session.loggedIn,
    });
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.get("/edit/id", withAuth, async (req, res) => {
    try {
        const dbPostData = await Post.findOne({
            where: {id: req.params.id},
            attributes: [ 'id', 'post_text', 'title', 'created_at'],
            include : [
                {model: Comments, attributes:['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include:{ model: User, attributes:['username']}},
                {model: User, attributes:['username']}],
});
if (!dbPostData) {
    res.status(404).json({ message: "No post found with this id!" });
    return;
  }
const posts = dbPostData.get({plain:true});
res.render('edit-post', {
    posts,
    loggedIn: req.session.loggedIn,});
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.get("/edituser", withAuth, async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            attributes: {exclude:['password']},
            where: {id: req.session.user_id}
        });            
if (!dbUserData) {
    res.status(404).json({ message: "No post found with this id!" });
    return;
  }
const user = dbUserData.get({plain:true});
res.render('edit-user', {
    user,
    loggedIn: req.session.loggedIn,});
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});