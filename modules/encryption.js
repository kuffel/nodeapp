
    var crypto = require('crypto');
    var bcrypt = require('bcrypt');

    // https://www.npmjs.com/package/bcrpyt#a-note-on-rounds
    const saltRounds = 10;
    const algorithm = 'aes-256-ctr';

    /**
     * Hash a password with bcrypt.
     * @param {string} password
     * @param {function} callback(err,hash)
     */
    module.exports.hashPassword = function( password, callback ){
        bcrypt.hash( password, saltRounds, callback );
    };

    /**
     * Check if the given password is correct.
     * @param {string} password
     * @param {string} hash
     * @param {function} callback(err,result)
     */
    module.exports.checkPassword = function( password, hash, callback ){
        bcrypt.compare( password, hash, callback );
    };

    /**
     * Synchronous password hashing.
     * @param {string} password
     * @returns {string} hash
     */
    module.exports.hashPasswordSync = function( password ){
        var salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(password, salt);
    };

    /**
     * Synchronous password checking.
     * @param {string} password
     * @param {string} hash
     * @returns {boolean} true if hash and password match
     */
    module.exports.checkPasswordSync = function( password, hash ){
        return bcrypt.compareSync(password, hash);
    };

    /**
     * Encrypt the given plain text with the given password.
     * @param {string} plain
     * @param {string} password
     * @returns Encrpyted text
     */
    module.exports.encryptText = function( plain, password ){
        var cipher = crypto.createCipher( algorithm, password );
        var encrypted = cipher.update(plain,'utf8','hex');
        encrypted += cipher.final('hex');
        return encrypted;
    };

    /**
     * Decrypt the given plain text with the given password.
     * @param {string} encrypted
     * @param {string} password
     * @returns Decrypted text
     */
    module.exports.decryptText = function( encrypted, password ){
        var decipher = crypto.createDecipher(algorithm, password);
        var decrypted = decipher.update(encrypted,'hex','utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    };

    /**
     * Decrypt the given buffer with the given password.
     * @param {Buffer} buffer
     * @param {string} password
     * @returns {Buffer} encrypted buffer
     */
    module.exports.encryptBuffer = function(buffer, password){
        var cipher = crypto.createCipher(algorithm,password);
        var encrypted = Buffer.concat([cipher.update(buffer),cipher.final()]);
        return encrypted;
    };

    /**
     * Decrypt the given buffer with the given password.
     * @param {Buffer} buffer
     * @param {string} password
     * @returns {Buffer} decrypted buffer
     */
    module.exports.decryptBuffer = function(buffer, password){
        var decipher = crypto.createDecipher(algorithm,password);
        var decrypted = Buffer.concat([decipher.update(buffer) , decipher.final()]);
        return decrypted;
    };


