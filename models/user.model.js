var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    Fname: String,
    Lname: String,
    ID: Number,
    Email: String,
    Username: String,
    Password: String,
    City: String,
    Street: String,
    Role: String
  });
  
  var User = mongoose.model('User', userSchema);
  
    module.exports= User;