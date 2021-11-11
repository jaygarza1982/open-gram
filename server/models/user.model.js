const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        index: true,
    },
    name: {
        type: String,
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = {
    User,
}
