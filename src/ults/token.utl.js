const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const publicKey = fs.readFileSync(path.join(__dirname, '../keys/publicKey.pem'), 'utf8');
const privateKey = fs.readFileSync(path.join(__dirname, '../keys/privateKey.pem'), 'utf8');

const decodeToken = (token) => {
    try {
        return jwt.verify(token, publicKey, {algorithms: [ 'RS256' ]});
    } catch (e) {
        return null;
    }
};

const encodeToken = (payload, expiresIn = '1h') => {
    return jwt.sign(
        {userId: payload._id, role: payload.role, issuer: 'VTCAdmin'},
        privateKey,
        {
            algorithm: 'RS256',
            expiresIn,
        }
    );
};

module.exports = {decodeToken, encodeToken};