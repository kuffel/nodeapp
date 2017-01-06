
    function demo (options) {
        options = options || {};

        return function (req,res,next){
            console.log("demo_middleware ok....");
            next();
        };
    }
    module.exports.demo = demo;