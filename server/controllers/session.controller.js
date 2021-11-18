const { User } = require('../models/user.model');

exports.check = async (req, res) => {
    try {
        const userId = req.session.getUserId();

        const currentUser = await User.findOne({ userId });

        res.send(currentUser);
    } catch (error) {
        console.log('Could not check session', error);
        res.status(500).send(error);
    }
}
