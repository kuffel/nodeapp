
    app.all('/api/develop/mail', function (req, res) {
        

        var emailjs = require('emailjs');
        var mailserver = emailjs.server.connect(app.get('mailserver'));

        mailserver.send({           
           from:    "nodeapp <vertx@kuffel.eu>", 
           to:      "Adam Kuffel <adam@kuffel.eu>, Max Meier <meier@kuffel.eu>",
           //cc:      "else <else@your-email.com>",
           subject: "testing emailjs",
           text:    "i hope this works",
           attachment: [
                {data:"<html>i <i>hope</i> this works!</html>", alternative:true}
                //{path:"path/to/file.zip", type:"application/zip", name:"renamed.zip"}
           ]
        }, function(err, message) { console.log(err || message); });

        
        
        res.status(501).json({
            "status" : 501,
            "message" : "this endpoint is not ready"
        });      
    });

