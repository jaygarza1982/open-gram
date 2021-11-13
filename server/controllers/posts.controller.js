const { Post } = require('../models/user.model');

exports.create = async (req, res) => {
    try {
        const { session } = req;
        const userId = session.getUserId();

        const { content, caption } = req.body;

        const post = new Post({
            content,
            caption,
            ownerId: userId,
        });

        await post.save();

        res.send();
    } catch (error) {
        console.log('Could not create post', error);
        res.status(500).send(error);
    }
}
