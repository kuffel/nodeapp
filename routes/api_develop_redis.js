
    app.all('/api/develop/redis', function (req, res) {
        
        // Redis Cache Example    
        // https://www.sitepoint.com/using-redis-node-js/
        /*
        var redis = require('redis');
        var client = redis.createClient('6379','127.0.0.1');
        client.on('connect', function(){
            console.log('Connected successfully to redis cache server');        
            client.set('hello', 'world', function(err, reply) {
                console.log(reply);
            });                
        });
        */        
        
           
        /*       
        var redis = require("redis");   
        cache = redis.createClient(app.get('redis_options'));
        cache.on('ready', function(){
            console.log('Redis cache connection ready.');
        });   
        cache.on('connect', function(){
            console.log('Redis cache connection connect.');
        });   
        cache.on('reconnecting', function(){
            console.log('Redis cache connection reconnecting.');
        });       
        cache.on('error', function(){
            console.log('Redis cache connection error.');
        });   
        cache.on('end', function(){
            console.log('Redis cache connection end.');
        });      
        */        
        
        
        res.status(501).json({
            "status" : 501,
            "message" : "this endpoint is not ready"
        });        
    });        
