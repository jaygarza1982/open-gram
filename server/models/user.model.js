const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        index: true,
    },
    name: {
        type: String,
    },
    posts: [{ type: String, ref: 'Post' }],
});

const PostSchema = new mongoose.Schema({
    ownerId: { type: String, ref: 'Post', index: true },
    content: { type: String },
    caption: { type: String },
});

const User = mongoose.model('User', UserSchema);
const Post  = mongoose.model('Post', PostSchema);

module.exports = {
    User,
    Post,
}
