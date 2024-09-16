const { User } = require('../models');
const bcrypt = require('bcrypt');
// const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const { createToken } = require('../helpers/jwt');


const registerUser = async (firstName,lastName,email,password) => {
    try {
        const user = await User.findOne({ email }); 
        if (user) {
            throw new Error("user already exist");
        }
        console.log("aosnd" ,email)

 const salt = bcrypt.genSaltSync(12);
 const hashedPassword = bcrypt.hashSync(salt + password, 12);
        const newUser = new User({ firstName,lastName,email, salt, password:hashedPassword });
        newUser.save()
        const token = createToken(newUser._id, newUser.email)


       return {id:newUser._id, token}
    } catch (err) {
        console.log(err)
        throw new Error(err);
    }
};

const loginUser = async (email, password) => {
    try {
        const user = await User.findOne({email });

        console.log(user)
        if (!user) {
            return { message: 'Invalid email or password' };
        }

        const validPassword = bcrypt.compareSync(
            user.salt + password,
            user?.password
          );

console.log(validPassword)
        if (!validPassword) {
            // return { message: 'Invalid email or password' };
            throw new Error("wrong password");
        }

        const token = createToken(user._id, user.email)
       return {id:user._id, token}
    } catch (err) {
        console.log(err)
        // return { message: 'something went wrong' };
        throw new Error(err);
    }
};

const logoutUser = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: 'Logout successful' });
    });
};

module.exports = { registerUser, loginUser, logoutUser };

