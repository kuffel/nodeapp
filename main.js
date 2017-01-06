
    var express = require('express');

    app = express();
    require('./config');

    //var bodyParser = require('body-parser');
    var formidable = require("express-formidable");
    //var multer = require('multer');
    //var upload = multer({ dest: 'uploads/' }); // multipart/form-data
    var cookieParser = require('cookie-parser');
    var compression = require('compression');
    var cors = require('cors');
    var helmet = require('helmet');
    var morgan = require('morgan');
    var favicon = require('serve-favicon');
    i18n = require("i18n");
    //_ = require('underscore');
    //var util = require("util");

    // Connect to mongo db with mongoose
    mongoose = require('mongoose');
    // http://mongoosejs.com/docs/promises.html
    mongoose.Promise = require('bluebird');

    mongoose.connect(app.get('mongo_connection_string'));
    var db = mongoose.connection;
    db.on('error', function(err){
        console.error('Fatal Error: Could not connect to mongo db.');
        process.exit(1);
    });
    db.once('open', function() {
        console.log('Connection to mongo db successful.');
    });


    /*
    // Connect to redis cache server
    var redis = require('redis');
    cache = redis.createClient(app.get('redis_options'));
    cacheReady = false;
    cache.on('ready', function(){
        console.log('Connection to redis cache successful.');
        cacheReady = true;
    });
    cache.on('connect', function(){
        cacheReady = false;
    });
    cache.on('reconnecting', function(){
        cacheReady = false;
    });
    cache.on('error', function(){
        console.error('Fatal Error: Could not connect to redis cache.');
        process.exit(1);
        cacheReady = false;
    });
    cache.on('end', function(){
        cacheReady = false;
    });
    */


    /*
    // Connect to elasticsearch server
    elasticsearch = new require('elasticsearch').Client(app.get('elasticsearch_config'));
    elasticsearch.ping({
        requestTimeout: 5000,
    }, function(error){
        if(error){
            console.error('Fatal Error: Could not connect to elasticsearch.');
            process.exit(1);
        }else{
            console.log('Connection to elasticsearch successful.');
        }
    });
    */

    /*
    // Connect to rabbitmq server
    rabbitmq = require('amqplib/callback_api');
    rabbitmq.connect(app.set('rabbitmq_connection_string'), function(err, conn) {
        if(err){
            console.error('Fatal Error: Could not connect to rabbitmq.');
            process.exit(1);
        }
        if(conn){
            console.log('Connection to rabbitmq successful.');
        }
    });
    */


    // Configure i18n
    i18n.configure({
        locales: app.get('i18n_locales'),
        defaultLocale: app.get('i18n_default_locale'),
        queryParameter: 'lang',
        updateFiles: app.get('i18n_update_files'), // true to create files for translations automatically
        directory: './locales'
    });
    app.use(compression());
    app.use(favicon(__dirname + '/public/favicon.ico'));
    if(app.get('logging') !== false){
        app.use(morgan(app.get('logging')));
    }
    app.use('/static', express.static('public'));
    app.use(cors());
    //app.use(bodyParser.json()); // for parsing application/json
    //app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.use(formidable({ uploadDir: app.get('upload_directory') }));
    app.use(cookieParser( app.get('cookie-secret')));
    app.use(i18n.init);
    app.use(helmet());

    // Error handling
    app.use(function(err, req, res, next) {
        console.error(err);
        res.status(err.status).json({
            'status' : err.status,
            'message' : err.message
        });
    });


    // Add custom middleware....
    // app.use(require('./middleware/demo').demo());

    // We are using ejs as template engine.
    app.set('views', __dirname + '/views');
    app.engine('.html', require('ejs').__express);
    app.set('view engine', 'html');


    app.use(function (req, res, next) {
        // Comment these three lines to disable CORS
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,HEAD,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        //res.setHeader('X-Powered-By', app.get('app_title')+' - '+app.get('app_version'));
        next();
    });

    // Include all files in models folder.
    var routesPath = require("path").join(__dirname, "models");
    require("fs").readdirSync(routesPath).forEach(function(file) {
        require("./models/" + file);
    });


    // Include all files in routes folder.
    var routesPath = require("path").join(__dirname, "routes");
    require("fs").readdirSync(routesPath).forEach(function(file) {
        require("./routes/" + file);
    });

    app.use(function(err, req, res, next){
        /*
         console.error(err.name);
         console.error(err.message);
         console.error(err.status);
         console.error(err.stack);
         */
        console.error(err.stack);
        res.json(err.status, err.message);
    });

    app.listen(app.get('port'), function () {
        console.log('Listening on port '+app.get('port'));
    });