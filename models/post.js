"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 500
    },

    _author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },

    image: String
  },

  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", schema);
