const userModel = require("../../models/user.Model")



exports.loginAuth = async (req, res, next) => {
  const md5 = require('md5')
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const username = req.body.username.toLowerCase()
  const password = req.body.password
  const lgn = await userModel.findOne({ username: username, password: md5(password) });
  console.log(lgn);
  if (lgn) {
    jwt.sign({ username: username }, 'rabbit', async (err, token) => {
      const setToken = await userModel.findOneAndUpdate({ user_id: lgn.user_id }, { tokenKey: token }, {
        new: true, runValidators: true
      });
      // res.json({
      //   token,
      //   setToken
      // })
      res.json(setToken);
    })
  } else {
    res.status(400).json({
      status: 'error',
      data: "Can't login"
    });
  }

}
