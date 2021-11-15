const { Post, User } = require('../models/user.model');

exports.create = async (req, res) => {
    try {
        const { session } = req;
        const userId = session.getUserId();

        const { content, caption } = req.body;

        // Find user with userId, get _id, set post ownerId to users _id
        const { _id } = await User.findOne({ userId });
        const post = new Post({
            content,
            caption,
            ownerId: _id,
        });

        await post.save();

        res.send();
    } catch (error) {
        console.log('Could not create post', error);
        res.status(500).send(error);
    }
}

exports.list = async (req, res) => {
    try {
        const { email } = req.params;

        // Find user by email to get _id, find posts owned by _id
        const { _id } = await User.findOne({ email });
        const posts = await Post.find({ ownerId: _id });

        res.send(posts);
    } catch (error) {
        console.log('Could not get posts', error);
        res.status(500).send(error);
    }
}
