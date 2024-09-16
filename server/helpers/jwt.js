const jwt = require('jsonwebtoken');
const secret = "secret"
const createToken = (id, email) => {
    var token = jwt.sign(
        {
            id, email
        },
        secret,
        { expiresIn: '15m' }
    );
    return token
    // console.log (token)
  
}

const decodeToken = (token) =>{
    var decoded = jwt.verify(token, secret);
return decoded
}

module.exports = {createToken, decodeToken}