
    app.all('/api/develop/mongo', function (req, res) {
        
        // Mongo DB Example    
        // http://mongodb.github.io/node-mongodb-native/2.2/quick-start/
        // http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html
        // http://mongoosejs.com/        
        /*
        var mongodb = require('mongodb');
        var assert = require('assert');
        var mongoClient = mongodb.MongoClient;        
        var url = 'mongodb://localhost:27017/demo_db';
        mongoClient.connect(url, function(err, db) {
          assert.equal(null, err);
          console.log("Connected successfully to mongo database");

          var collection = db.collection('persons');     
          collection.find({ "birthplace" : "Karsonberg" }).toArray(function(err,docs){
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs);          
          });

          var collection = db.collection('documents');
          collection.insert();
          db.close();
        });
        */   
       
        /*
        // http://mongoosejs.com/docs/index.html
        var mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost/test');
        
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log('connections successful...');
            
            var kittySchema = mongoose.Schema({
                name : String                
            });
            
            var Kitten = mongoose.model('Kitten', kittySchema);

            var anton = new Kitten({ name : 'Anton' });
            anton.save(function(err, saved){
                console.log(err);
                console.log(saved);
            });
            db.close();
        });
        */
        
        /*
        var Cat = mongoose.model('Cat', { name: String });
        var kitty = new Cat({ name: 'Zildjian' });
        kitty.save(function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log('meow');
          }
        });
        */
       
       
       
       
 
        
        res.status(501).json({
            "status" : 501,
            "message" : "this endpoint is not ready"
        });        
    });        



