

app.set('x-api-key', 'DEMOKEY');

// Environment mode. Be sure to set to "production" in a production environment
app.set('env', 'production');

// When true, "/Foo" and "/foo" are different routes.
app.set('case sensitive routing', true);

// When true, the router treats "/foo" and "/foo/" as different.
app.set('strict routing', true);

// This directory will contain new uploaded files.
app.set('upload_directory', 'uploads/');


// Default HTTP Port settings
app.set('port', process.env.PORT || 8888);
app.set('port_ssl', process.env.PORT_SSL || 8443);

// Cookie parser signed cookie secret.
app.set('cookie-secret', 'INSERT_YOUR_SECRET_HERE');

// i18n settings
app.set('i18n_locales' , ['en','de']);
app.set('i18n_default_locale' , 'en');
app.set('i18n_update_files' , true);

// morgan logging settings, set logging to false to disable logging.
// Available modes: combined, common, dev, short, tiny
app.set('logging', 'short' );


// Mailserver settings
// https://www.npmjs.com/package/emailjs
app.set('mailserver', {
    user : 'user@example.com',
    password : 'password',
    host : 'mail.example.com',
    port : 587,
    tls : true
});


// Elasticsearch settings
// https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/configuration.html#config-options
app.set('elasticsearch_config', {
    host: 'localhost:9200',
    //log: 'trace'
    log : [{
        type: 'stdio',
        levels: ['error', 'warning']
    }]
});

// Rabbit MQ settings
app.set('rabbitmq_connection_string', 'amqp://myadmin:password@localhost');


// This options for a redis cache server will be used automatically.
// https://www.npmjs.com/package/redis#rediscreateclient
app.set('redis_options', {
    host : '127.0.0.1',
    port : 6379
});

// Set connection string for mongo db,
// https://docs.mongodb.com/manual/reference/connection-string/
app.set('mongo_connection_string', 'mongodb://localhost/demo_db');