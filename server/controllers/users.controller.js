const { User } = require('../models/user.model');

exports.register = async (req, res) => {
    try {
        const { email, name } = req.body;

        await User.create({ email, name });

        res.send();
    } catch (error) {
        console.log('Could not register', error);
        res.status(500).send(error);
    }
}
