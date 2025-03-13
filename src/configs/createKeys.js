const {writeFileSync} = require('fs');
const {generateKeyPairSync} = require('crypto');
const path = require('path');

const {privateKey, publicKey} = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {type: 'pkcs1', format: 'pem'},
    privateKeyEncoding: {type: 'pkcs1', format: 'pem'},
});

writeFileSync(path.join(__dirname, '../keys/privateKey.pem'), privateKey);
writeFileSync(path.join(__dirname, '../keys/publicKey.pem'), publicKey);

console.log('Keys generated and saved in "keys" folder');
