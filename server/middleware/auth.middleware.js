const { User } = require('../models');
const {decodeToken} = require("../helpers/jwt")
const authenticate = async ({req, res}) => {
    // console.log(req)



    if(req.headers.authorization){
        // return res.status(401).json({ message: 'Authentication required' });
        const token = req.headers.authorization
        try{
            let decodedToken = decodeToken(token)
            console.log(decodedToken) 
            const user = await User.findById(decodedToken.id);
            console.log(user)
            if(!user){
                throw new Error("No user found");
            }
            return {user};
        }
        catch(error){
            console.log("Invalid token")
            return ;
        }
    }
    // next()
    // if (!req.session.userId) {
    //     return res.status(401).json({ message: 'Authentication required' });
    // // }

    // try {
    //     // const user = await User.findById(req.session.userId);
    //     if (!user) {
    //         return res.status(401).json({ message: 'Invalid session' });
    //     }

    //     req.user = user;
    //     next();
    // } catch (err) {
    //     res.status(500).json(err);
    // }
};

module.exports = { authenticate };
