const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

Comments.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

Post.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks:true
})

// Export the modules
module.exports = { User, Post, Comments };