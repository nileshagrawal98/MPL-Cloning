const mongoose = require('mongoose');

const connect = () =>{
    return mongoose.connect('mongodb+srv://nilesh98:nilesh98@mplclone.gyfvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
}

module.exports = connect;