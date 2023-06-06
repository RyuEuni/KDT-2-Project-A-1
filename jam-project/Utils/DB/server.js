const express = require('express');
const signUpDB = require('./signUp');

const http = require('http');

const app = express();

const server = http.createServer(function (request, response) {
  signUpDB(request, response);
});

// 서버 포트 설정
server.listen(3000, function (error) {
  if (error) {
    console.error("서버 안돌아감");
  } else {
    console.log("서버 돌아감");
  }
});

module.exports = server;