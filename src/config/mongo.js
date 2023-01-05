const mongoose = require('mongoose');

const dbConnect =() => {
    mongoose.set('strictQuery', true);
    mongoose.connect (
        'mongodb://127.0.0.1:27017/Impresiones_3d',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    
    function (err, res){
        if (err){
            console.log ('Error connection', err);
        }else {
            console.log('Sucess Connection');
        }
    })
}
module.exports = dbConnect;