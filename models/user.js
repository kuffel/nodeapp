
    app = app || {};
    app.schemas = app.schemas || {};
    app.models = app.models || {};

    var random = require('../modules/random');
    var async = require('async');
    var validator = require('validator');

    app.schemas.User = mongoose.Schema({
            name : { type : String, required : true, unique : true },
            mail : { type : String, required : true, unique : true },
            password : Buffer,
            token : String,
            resetcode : String,
            verified : { type : Boolean, default: false },
            verificationcode : String,
            lastactive : Date,
            created : Date,
            updated : Date
        },
        // Options Schema
        {
            collection: 'users', // Name for collection
            minimize: false, // Do not remove empty objects from docs
            strict : true, // values that are not in schema will not be saved
            //timestamps : true
            timestamps : { createdAt: 'created', updatedAt: 'updated' }
        });

    app.schemas.User.pre('save', function (next) {
        if(this.token == null){
            this.token = random.randomId(128);
        }
        if(this.verificationcode == null){
            this.verificationcode = random.randomId(128);
        }
        if(this.name){
            this.name = this.name.toLowerCase();
        }
        if(this.mail){
            this.mail = this.mail.toLowerCase();
        }
        next();
    });



    app.schemas.User.static('findByName', function (name, callback) {
        if(!name){ name = ''; }
        app.models.User.findOne({ name : name.toLowerCase() }, callback);
    });

    app.schemas.User.static('findByMail', function (mail, callback) {
        if(!mail){ mail = ''; }
        app.models.User.findOne({ mail : mail.toLowerCase() }, callback);
    });

    app.schemas.User.static('findByToken', function (token, callback) {
        app.models.User.findOne({ token : token.toLowerCase() }, callback);
    });

    app.schemas.User.static('signup', function( name, mail, password, callback ){
        var errors = [];
        var nameClean = validator.escape(validator.trim(name.toLowerCase()));
        var mailClean = validator.escape(validator.trim(mail.toLowerCase()));
        var passwordClean = validator.trim(password);

        if(!validator.isAlphanumeric(nameClean)){
            errors.push({
                field: 'name',
                message : 'Only letters and numbers are allowed in usernames.'
            });
        }
        if(validator.isEmpty(nameClean)){
            errors.push({
                field: 'name',
                message : 'Empty usernames are not allowed'
            });
        }
        if(!validator.isEmail(mailClean) || validator.isEmpty(mailClean)){
            errors.push({
                field: 'mail',
                message : 'Invalid emailaddress'
            });
        }
        if(validator.isEmpty(passwordClean) || passwordClean.length < 6){
            errors.push({
                field: 'password',
                message : 'Invalid password your password must be at least 6 characters long.'
            });
        }

        if(errors.length === 0){
            app.models.User.findByName( nameClean, function(nameError, nameResult ){
                if(nameError === null){
                    if(nameResult === null){
                        // username not taken, checking emailaddress...
                        app.models.User.findByMail( mailClean, function( mailError, mailResult ){
                            if(mailError === null){
                                if(mailResult === null){
                                    // emailaddress not taken, creating user...
                                    var userObj = new app.models.User({
                                        name : nameClean,
                                        mail : mailClean,
                                        password : require('../modules/encryption').hashPasswordSync(passwordClean)
                                    });
                                    userObj.save(function(saveError,saveResult){
                                        callback(null, {
                                            status : 201,
                                            message : 'Account successfully created'
                                        });
                                    });
                                }else{
                                    errors.push({
                                        field: 'mail',
                                        message : 'Mailaddress already in use.'
                                    });
                                    callback(errors,null);
                                }
                            }else{
                                errors.push({
                                    field: 'mail',
                                    message : 'Error while searching user by mail.',
                                    details : mailError
                                });
                                callback(errors,null);
                            }
                        });
                    }else{
                        errors.push({
                            field: 'name',
                            message : 'Username already exists'
                        });
                        callback(errors,null);
                    }
                }else{
                    errors.push({
                        field: 'name',
                        message : 'Error while searching user by name.',
                        details : nameError
                    });
                    callback(errors,null);
                }
            });
        }else{
            callback(errors,null);
        }
    }); // END app.schemas.User.static('signup')



    app.schemas.User.static('loginByName', function( name, password, callback ){
        var errors = [];
        var nameClean = validator.escape(validator.trim(name.toLowerCase()));
        var passwordClean = validator.trim(password);
        if(validator.isAlphanumeric(nameClean) && !validator.isEmpty(nameClean)){
            app.models.User.findByName( nameClean, function(findError, userData ){
                if(findError === null && userData !== null){
                    require('../modules/encryption').checkPassword(passwordClean, userData.get('password',String), function(checkError,checkResult){
                        if(checkResult){
                            callback(null,true);
                        }else{
                            callback('Invalid credentials',false);
                        }
                    });
                }else{
                    callback('Invalid credentials',false);
                }
            });
        }else{
            callback('Invalid credentials',false);
        }
    });  // END app.schemas.User.static('loginByName')



    app.schemas.User.static('loginByMail', function( mail, password, callback ){
        var errors = [];
        var mailClean = validator.escape(validator.trim(mail.toLowerCase()));
        var passwordClean = validator.trim(password);
        if(validator.isEmail(mailClean) || !validator.isEmpty(mailClean)){
            app.models.User.findByMail( mailClean, function(findError, userData ){
                if(findError === null && userData !== null){
                    require('../modules/encryption').checkPassword(passwordClean, userData.get('password',String), function(checkError,checkResult){
                        if(checkResult){
                            callback(null,true);
                        }else{
                            callback('Invalid credentials',false);
                        }
                    });
                }else{
                    callback('Invalid credentials',false);
                }
            });
        }else{
            callback('Invalid credentials',false);
        }
    });  // END app.schemas.User.static('loginByMail')


    app.models.User = mongoose.model('User', app.schemas.User);