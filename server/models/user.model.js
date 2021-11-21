const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        index: true,
    },
    email: {
        type: String,
        index: true,
    },
    name: {
        type: String,
    },
});

const PostSchema = new mongoose.Schema({
    ownerId: { type: Schema.Types.ObjectId, ref: 'User' },
    username: String,
    content: { type: String },
    caption: { type: String },
    datePosted: Date,
});

const User = mongoose.model('User', UserSchema);
const Post  = mongoose.model('Post', PostSchema);

module.exports = {
    User,
    Post,
}
