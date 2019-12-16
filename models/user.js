'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },

  city :{
    type : String,
    // required: true,
    trim: true
  },

  isShop: {
    type: Boolean,
    default: false
    // required: true
  },

  confirmationCode: String,
  image: String,
  bio: String,

  status: {
    type: String,
    enum: ["Active", "Pending"],
    default: "Pending"
  },
 
  passwordHash: {
    type: String
  }
  
 
},

 {
    timestamps: true
  }
  );

module.exports = mongoose.model('User', schema);
