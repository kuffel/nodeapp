
    app.all('/api/develop/rabbitmq', function (req, res) {

        // RabbitMQ
        // https://www.heise.de/developer/artikel/Message-Queues-mit-AMQP-und-Node-js-2099074.html
        // https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html
        /*
        var amqp = require('amqplib/callback_api');
        amqp.connect('amqp://myadmin:password@localhost', function(err, conn) {        
            console.log(err);
            console.log(conn);

        });
        */

        
        
        res.status(501).json({
            "status" : 501,
            "message" : "this endpoint is not ready"
        });        
    });       

