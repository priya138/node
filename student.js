var mongoose = require('mongoose');
//Defining Schema
var studentSchema = mongoose.Schema({


    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    mob: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    pincode: {
        type: String,
        required: true
    }
});

var stupackage = module.exports = mongoose.model('StudentCollection', studentSchema); //Binding schema 

module.exports.addStudent = function(data, callback) {
    stupackage.create(data, callback);
}
module.exports.getStudentByField = function(ret, callback) {
    stupackage.find({name:ret}, callback);
}
module.exports.updateStudent = function(name, data, options, callback) {
    var query = {
       pname: pname
    };
    var update = {
       pen name: data.pname,
        pen quality: data.pquality,
        pen quantity: data.pquantity,
        pen cost: data.pcost,
        pen model: data.pmodel
    }
    stupackage.findOneAndUpdate(query, update, options, callback);
}
module.exports.removeStudent = function (name, callback) {
    var query = {
        pname: pname
    };
    stupackage.remove(query, callback);
}
module.exports.getDetails = function(callback) {
    stupackage.find(callback);
}

