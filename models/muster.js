
    app = app || {};
    app.schemas = app.schemas || {};
    app.models = app.models || {};

    // Reserverd document keys
    //on, emit, _events, db, get, set, init, isNew, errors, schema, options, modelName, collection, _pres, _posts, toObject

    app.schemas.Muster = mongoose.Schema({
            name: { type : String , required : true, index:true },
            label: String,
            size : Number,
            rawData : Buffer,
            validated: Boolean,
            tags : Array,
            age: { type: Number, min: 18, max: 65 },
            comments: [{ body: String, date: Date }],
            owner : mongoose.Schema.Types.ObjectId,
            stuff: { type: String, lowercase: true, trim: true },
            created: { type: Date, default: Date.now },
            meta: {
                votes: { type : Number, default : 99 },
                favs:  { type : Number, default : 66 }
            }
        },
        // Options Schema
        {
            collection: 'musters', // Name for collection
            minimize: false, // Do not remove empty objects from docs
            strict : true // values that are not in schema will not be saved
            //timestamps : true
        }
    );

    // http://mongoosejs.com/docs/middleware.html
    // http://mongoosejs.com/docs/api.html#schema_Schema-post
    // http://mongoosejs.com/docs/api.html#schema_Schema-pre
    app.schemas.Muster.post('save', function (doc) {
        //console.log('this fired after a document was saved');
    });

    // http://mongoosejs.com/docs/api.html#schema_Schema-static
    app.schemas.Muster.static('findByName', function (name, callback) {
        return this.find({ name: name }, callback);
    });



    app.schemas.Muster.methods.speak = function () {
        console.log('speak '+this.name+': Juhu!');
    };

    app.models.Muster = mongoose.model('Muster', app.schemas.Muster);


