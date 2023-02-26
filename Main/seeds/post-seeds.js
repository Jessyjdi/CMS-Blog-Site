const { Post } = require("../models");

const postData = [
  {
    title: "MVC",
    post_text:
      "MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. MVC has been widely adopted as a design for World Wide Web applications in major programming languages. ",
    user_id: 1,
  },
  {
    title: "What is Handlebars?",
    post_text: "Handlebars is one of the most used templating engines for web applications “competing” with other well-known ones like Mustache js, Pug, EJS and others.",
    user_id: 2,
  },
  {
    title: "Built-in Helpers in Handlebars",
    post_text:
      "For example, in checking for initialization of a variable the built-in #if check might not be appropriate as it returns false for empty collections",
    user_id: 4,
  },
  {
    title: "MVC Middleware",
    post_text:
      "Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;