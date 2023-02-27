const { Comments } = require('../models');

const commentData = [
  {
    comment_text: "MVC is an interesting concept to learn",
    post_id: 4,
    user_id: 1
  },
  {
    comment_text: "Handlebars partials help you with avoiding to write repetitive code",
    post_id: 3,
    user_id: 2
  },
  {
    comment_text: "There are other type of helpers like Custom Helpers and Block Helpers too.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "An Express applicatin can use the other types of middleware like Applicaltion-level, Router-level, Error-HAndling, Built-in and Third-party middleware.",
    post_id: 2,
    user_id: 3
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;