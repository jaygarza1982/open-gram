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

        // Create post, obtain post id
        const postResult = await post.save();
        const postId = postResult._id;

        // Push to user's owned posts array to populate later
        await User.update({ _id }, { $push: { posts: postId } });

        res.send();
    } catch (error) {
        console.log('Could not create post', error);
        res.status(500).send(error);
    }
}

exports.list = async (req, res) => {
    try {
        const { email } = req.params;

        const user = await User.find({ email }).populate('posts').exec();

        res.send(user);
    } catch (error) {
        console.log('Could not get posts', error);
        res.status(500).send(error);
    }
}
