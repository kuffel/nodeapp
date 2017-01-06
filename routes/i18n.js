
    app.get('/i18n.js', function (req, res) {        
        var language = req.app.get('i18n_default_locale');
        var jsonFileName = req.app.get('i18n_default_locale')+'.json';
        if(require('underscore').contains( req.app.get('i18n_locales'), req.language )){
            jsonFileName = req.language + '.json';
            language = req.language;
        }
        jsonFileName = require("path").join('locales',jsonFileName);
        require('fs').readFile(jsonFileName,'utf8', function(err, data){
            require('assert').equal(err,null, 'Could not read translation file at '+jsonFileName);         
            // TODO: Caching Header or ETag, actually every request triggers a 200 status code.            
            res.type("application/javascript").status(200).end("var i18n = { language : '"+language+"', strings : "+data+" }; ");
        });
    });
