const mongoose = require('mongoose')
const User =  mongoose.model('User',{
    firstname : {
        type : String
    },
    lastname:{
        type : String
    },
    numerotelephone : {
        type: String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    confirmpassword : {
        type : String
    },
   
    zip : {
        type : String
    },
    city : {
        type : String
    },
   adresse : {
        type : String
    },
   

})

module.exports = User