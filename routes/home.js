
    app.get('/', function (req, res) {    
        //console.log(req.headers);       
        //res.status(400).json( { hello : "world" } );
        /*
        res.download()	Prompt a file to be downloaded.
        res.end()           End the response process.
        res.json()          Send a JSON response.
        res.jsonp()         Send a JSON response with JSONP support.
        res.redirect()	Redirect a request.
        res.render()	Render a view template.
        res.send()          Send a response of various types.
        res.sendFile()	Send a file as an octet stream.
        res.sendStatus()	Set the response status code and send its string representation as the response body.    
        */
       
        //console.log(req.body);
        //res.status(501).json( app.locals );        
        //res.status(501).json( req.body );
        
        //res.render('pages/index');
        
        
        i18n.setLocale(req.language);
        res.render('pages/index', {
            title : 'Nodeapp',
            /*
            dashboard : i18n.__('dashboard'),
            profile : i18n.__('profile'),
            billing : i18n.__('billing'),
            login : i18n.__('login'),
            logout : i18n.__('logout'),
            signup : i18n.__('signup'),
            help : i18n.__('help'),
            settings : i18n.__('settings'),
            password_forgotten : i18n.__('password_forgotten'),
            search_placeholder : i18n.__('search_placeholder')
            */
            //hello : i18n.__('hello'),
            //words : [ 'hello', 'this', 'is', 'a', 'simple', 'test' ]            
        });        
        
        
        //res.status(200).json( require("crypto").createHash('sha512').update("demodata").digest('hex') );
        
        
        
        
    });