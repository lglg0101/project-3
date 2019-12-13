"use strict";

const { Router } = require("express");
const router = new Router();
const User = require("./../models/user");
const bcryptjs = require("bcryptjs");
const nodemailer = require("nodemailer");
const express = require("express");

//SIGN UP

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });

router.post("/sign-up", (req, res, next) => {
  const { username, email, city, role, image, password } = req.body;
  console.log("helloo", req.body);
  //const image = req.file.url;
  // let token = "";
  // const generateId = length => {
  //   const characters =
  //   '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   for (let i = 0; i < length; i++) {
  //     token += characters[Math.floor(Math.random() * characters.length)];
  //   }
  // };

  // generateId(12);
  bcryptjs
    .hash(password, 10)
    .then(hash => {
      return User.create({
        username,
        email,
        city,
        // coordinates,
        role,
        image,
        // confirmationCode: token,
        passwordHash: hash
      });
    })
    .then(user => {
      console.log(user);
      req.session.user = user._id;
      res.json({ user });
    })

    // .then(
    // transporter.sendMail({
    //   from: `Thrift Point<${process.env.EMAIL}>`,
    //   to: req.body.email,
    //   subject: 'Welcome To Thrift Point Community! Please Verify Your email to get access to all the cool features',
    //   // text: `https://new-day-journal.herokuapp.com/auth/confirm/${token}`,

    //       html:`
    //   <style></style>
    //   <div style="background-colour: yellow">
    //   <h1 style="color:  #779FA1; font-size: 50px; text-align: center">Welcome To Thrift Point</h1>
    //   <h2 style="color: #5C7457; font-size: 40px; text-align: center"><strong>
    //   // Please verify your email by clicking <a href="https://new-day-journal.herokuapp.com/auth/confirm/${token}">
    //   here</a></h2
    //   </div>
    //   `
    // }))

    .catch(error => {
      console.log(error);
      next(error);
    });
});

// router.get('/confirm/:code', (req, res, next) => {
//     const code = req.params.code;
//     User.findOneAndUpdate({confirmationCode : code}, {status: "Active"})
//     .then(user => {
//       req.session.user = user._id;
//       res.redirect(`/${user._id}`);
//     })
//     .catch(error => {
//       next(error);
//     });
//   });

router.post("/sign-in", (req, res, next) => {
  let userId;
  let auxuser;
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        userId = user._id;
        auxuser = user;
        return bcryptjs.compare(password, user.passwordHash);
      }
    })
    .then(result => {
      if (result) {
        req.session.user = userId;
        res.json({ auxuser });
      } else {
        return Promise.reject(new Error("Wrong password."));
      }
    })
    .catch(error => {
      console.log(error);

      next(error);
    });
});

router.post("/sign-out", (req, res, next) => {
  req.session.destroy();
  res.json({});
});

module.exports = router;
