var mongoose = require('mongoose');
mongoose.Promise =  global.Promise;

mongoose.connect('mongodb://localhost:27017/Graph_Gl_Database',{ useNewUrlParser: true },(err,db) => {
    if(err)
        console.log('Database Connection Failed');
    else
        console.log('Successfully Connected To Future1CoinApp');

});

module.exports = {mongoose};