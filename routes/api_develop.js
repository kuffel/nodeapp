    /*
    var mongoose = require('mongoose');
     
    var kittySchema = mongoose.Schema({
        name: { type : String , required : true },
        label: String,
        size : Number,
        rawData : Buffer,
        validated: Boolean,
        tags : Array,
        age: { type: Number, min: 18, max: 65 },
        comments: [{ body: String, date: Date }],
        owner : mongoose.Schema.Types.ObjectId,
        stuff: { type: String, lowercase: true, trim: true },
        created: { type: Date, default: Date.now },
        meta: {
            votes: { type : Number, default : 99 },
            favs:  { type : Number, default : 66 }
        }
    });    
    
    kittySchema.methods.speak = function () {        
        console.log('speak '+this.name+': Juhu!');
    };

    
    

    var Kitten = mongoose.model('Kitten', kittySchema);
    
    
    var fluffy = new Kitten({ 
        name: 'fluffy', 
        size: 45, 
        tags : ['a','b','c','d'],
        rawData : Buffer.from('this is a tést')
    });
    console.log(fluffy);
    

    
    
    
    mongoose.connect('mongodb://localhost/demo_db');
    var db = mongoose.connection;
    db.on('error', function(err){
        console.error('Fatal Error: Could not connect to mongo db');
        process.exit(1);
    });
    db.once('open', function() {
        console.log('connection ok');
        fluffy.save(function (err, fluffy) {
            console.log(err);
            console.log(fluffy);
        });
    });
    */

    /*
    var  m1 = new app.models.Muster({ 
        name: 'fluffy', 
        size: 45, 
        tags : ['a','b','c','d'],
        rawData : Buffer.from('this is a tést')
    });    
    console.log(m1);
    */
    
    // https://github.com/marak/Faker.js/
    //var faker = require('faker');
    /*
    var file = {
        mimeType : faker.system.mimeType(),
        version : faker.system.semver()
        
    };
    console.log(file);
    */
    /*
    var post = {
        title : faker.lorem.sentence(),
        content : faker.lorem.sentences(faker.random.number({ min: 4, max: 20 })),
        created : faker.date.past( 4 ),
        image : faker.image.image(),
        tags : faker.lorem.words(faker.random.number({ min: 1, max: 6 })).split(' ')
    };
    console.log(post);
    */
    
    /*
    var company = {
        name : faker.company.companyName(),
        suffix : faker.company.companySuffix(),
        catchPhrase : faker.company.catchPhrase(),
        founded : faker.date.past(150),
        phone : faker.phone.phoneNumber(),
        website : faker.internet.url(),
    };
    console.log(company);
    */
    
    /*
    var person = {
        dna : faker.random.uuid(),
        image : faker.internet.avatar(),
        firstname : faker.name.firstName(),
        lastname : faker.name.lastName(),
        birthdate : faker.date.past( 80 ),
        size : faker.random.number({ min: 150, max: 190 }),
        weight : faker.random.number({ min: 60, max: 110 }),
        eyecolor : faker.random.arrayElement(['blue','green','gray','brown'])        
    };
    console.log(person);
    */
   
    /*
    var address = {
        streetAddress : faker.address.streetAddress(),
        city : faker.address.city(),
        zipCode : faker.address.zipCode(),
        country : faker.address.country(),
        latitude : Number.parseFloat(faker.address.latitude()),
        longitude : Number.parseFloat(faker.address.longitude())
    }
    console.log(address);
    */
   
   
    //var encryption = require('../modules/encryption');    
    /*
    var encrypted = encryption.encryptText("Hallo hier kommt was zum verschlüsseln.", "password");    
    var decrypted = encryption.decryptText( encrypted, "password" );
    console.log( decrypted );
    */
    
    
        
    /*
    encryption.hashPassword( "password", function(err,hash){
        console.log(err);
        console.log(hash);
        encryption.checkPassword( "password", hash, function(err,result){
            console.log(err);
            console.log(result);
        });        
    });
    */


    //console.log(app.models);
    var faker = require('faker');
    
    /*
    setInterval( function(){
        var m1 = new app.models.Muster({ 
            name : faker.name.findName(),
            label : faker.lorem.word(),
            size : faker.random.number({min: 10 , max: 99}),
            age : faker.random.number({min: 18 , max: 65}),
            validated: faker.random.boolean(),
            created: faker.date.past(16),
            meta : {
                votes : faker.random.number({min: 0 , max: 90000}),
                favs : faker.random.number({min: 0 , max: 90000})
            }        
        });    
        m1.tags = [];
        var elementsToAdd = faker.random.number({min: 0 , max: 10});
        for( var i = 0; i < elementsToAdd; i++  ){
            m1.tags.push(faker.lorem.word());        
        }
        m1.comments = [];
        var commentsToAdd = faker.random.number({min: 0 , max: 10});
        for( var i = 0; i < elementsToAdd; i++  ){
            var c = {};
            c.body = faker.lorem.sentence();
            c.date = faker.date.past(16);        
            m1.comments.push(c);
        }
        m1.save();
        //console.log(m1);    
    }, 2000);
    */
    
    
    /*
    app.models.Muster.findById( "582f178f2e7e90b09be15e8c" , function (err,model){
        //console.log(err);
        console.log(model);        
        model.label = 'Juhu it works';
        model.increment();
        model.save();
    }); 
    */
   
    /*
    app.models.Muster.findOne({ "_id" : "582f178f2e7e90b09be15e8c" }, function(err,model){
        //console.log(err);        
        // http://mongoosejs.com/docs/api.html#document_Document-get
        //console.log(model.get('meta.favs'));               
        //http://mongoosejs.com/docs/api.html#document_Document-set
        //model.set('meta.favs', 99, Number);
        //model.invalidate('meta.favs', 'Should be at least 100', model.get('meta.favs'), "error");        
        //var err = model.validateSync();
        //console.log(err);
        //doc.markModified('dueDate');
        //doc.set('documents.0.title', 'changed');        
        console.log(model);
        //model.tags.push('geht');
        //model.save();
    });
    */
   
    /*
    app.models.Muster.find({ label : 'perferendis' }).where('meta.favs').gte(25200).exec( function(err,results){        
        console.log(err);
        console.log(results);
    });
    */
    /*
    // Using query builder
    Person.
    find({ occupation: /host/ }).
    where('name.last').equals('Ghost').
    where('age').gt(17).lt(66).
    where('likes').in(['vaporizing', 'talking']).
    limit(10).
    sort('-occupation').
    select('name occupation').
    exec(callback);
    */
    
    
   
    /*
    m1.save().then(function(err, model){
        console.log(err);
        console.log(model);
    });
    */
    
    /*
    app.models.Muster.count({},function(err,count){
        console.log(count);
    });
    */
   
    /*
    app.models.Muster.where('meta.favs').gt(33600).lt(33680).exec( function(err,results){        
        console.log(err);
        console.log(results);
    });
    */
   
    
   

    
    /*
    m1.save(function(err, model){
        console.log(err);
        console.log(model);
    });
    
    m1.speak();

    app.models.Muster.count({},function(err,count){
        console.log(count);
    });
    
    app.models.
    */


    /*
    u1 = new app.models.User({
        name : 'larsen',
        mail : 'larsen@kuffel.eu',
        password : require('../modules/encryption').hashPasswordSync('password')        
    });
    
    u1.save( function(err, result){
        console.log(err);
        console.log(result);
    });
    */
   
    /*
    app.models.User.signup('meiermann','meiermann@kuffel.eu','password', function(errors,result){
        console.log(errors);
        console.log(result);
    });
    */
   
    /*
    app.models.User.loginByName('meiermann', 'passwords', function(errors,result){
        console.log(errors);
        console.log(result);
    });
    
    app.models.User.loginByMail('meiermanN@kuffel.eu', 'password', function(errors,result){
        console.log(errors);
        console.log(result);
    });
    */
   
    /*
    var meier = app.models.User.findByName( 'MEIER', function(err,result){
        console.log(err);
        console.log(result);        
    });
    */

    /*
    for(var i = 0; i < 10 ; i++){
        //var random = require('../modules/random').randomString('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',10);
        var random = require('../modules/random').randomId(16);
        console.log(random);
    }
    */
   
    /*
    var error = u1.validateSync();
    */
    //console.log(u1);
    //console.log(error.errors);
    /*
    for( var e = 0; error.messages.length; e++ ){
        console.log(error.messages[e]);
    }
    */
    
    
    
    
    
    app.all('/api/develop', function (req, res) {        
        var requestData = {};                
        requestData.method = req.method;     
        /*
        requestData.fresh = req.fresh;     
        requestData.stale = req.stale;     
        requestData.ip = req.ip;     
        */
        requestData.headers = req.headers;        
        requestData.params = req.params;
        requestData.query = req.query;
        requestData.body = req.fields;
        requestData.files = req.files;        
        requestData.language = req.language;        
        requestData.cookies = req.cookies || {};
        requestData.signedCookies = req.signedCookies || {};        
        //requestData.body = req.body;        
        //requestData.local = app.locals;        
        
        res.status(501).json(requestData);
        
        
        // Examples : http://caolan.github.io/async/        
        //var async = require('async');
        //var fs = require('fs');
        
        /*
        var  m1 = new app.models.Muster({ 
            name: 'fluffy', 
            size: 45, 
            tags : ['a','b','c','d'],
            rawData : Buffer.from('this is a tést')
        });    
        m1.save();
        */
   
   
        
        /*
        async.map(['locales/de.json','locales/en.json','CHANGELOG'], fs.stat, function(err, results){
           console.log(err);
           console.log(results);
        });
        */

        /*
        async.filter(['locales/de.json','locales/en.json','CHANGELOG'], function(filePath, callback) {
            fs.access(filePath, function(err) {
              callback(null, !err);
            });
        }, function(err, results){
            // results now equals an array of the existing files
           console.log(err);
           console.log(results);            
        });
        */

        
        // Examples : https://nodejs.org/dist/latest-v7.x/docs/api/crypto.html
        /*
        const crypto = require('crypto');
        const cert1 = new crypto.Certificate();        
        console.log(cert1);
        */
        
        
        
        
        
        
    });
