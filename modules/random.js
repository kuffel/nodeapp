

    module.exports.randomString = function( chars, length ){
        var ret = '';
        for( var i = 0; i < length; i++ ){
            ret += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return ret;
    };

    module.exports.randomId = function( length ){
        return this.randomString('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', length);
    };