
    app.all('/api/develop/faker', function (req, res) {
        
        var faker = require('faker');
        console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
        
        
        
        res.status(501).json({
            "status" : 501,
            "message" : "this endpoint is not ready"
        });        
    });        
