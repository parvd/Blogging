const User = require('../model/users');

exports.postSignup = async (req, res, next) => {
    console.log("req=",req.body)
    const {username, password, email, bio} = req.body;
    try {
        const user = new User({username, password, email, bio});
        const result = await user.createUser();
        res.send(user);
    } catch (error) {
        const errorToThrow = new Error();
        switch (error?.code) {
            case '23505':
                errorToThrow.message = 'User already exists';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.statusCode = 500;
        }
        //pass error to next()
        next(errorToThrow);
    }
};
