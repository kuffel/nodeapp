
    app.all('/api/develop/elasticsearch', function (req, res) {
        
        // Elasticsearch
        // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/quick-start.html    
        /*
        var elasticsearch = require('elasticsearch');
        var client = new elasticsearch.Client({
            host: 'localhost:9200',
            log: 'trace'
        });
        */        
       
        res.status(501).json({
            "status" : 501,
            "message" : "this endpoint is not ready"
        });        
    });        

