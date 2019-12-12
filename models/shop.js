'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  shopName: {
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

  coordinates: [{ 
    type: Number
  }],

  bio: String,
  telephone: Number, 
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"},

//MAP LOCATION API SCHEMA HERE 


  
confirmationCode: String,

image: {
    type: String,
    required: true,
    trim: true
  },

workingHours: String,

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

module.exports = mongoose.model('Shop', schema);
