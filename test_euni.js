"use strict";
// import express from 'express'
// // import * as express from 'express';
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// const port = 3000;
// app.get('/', (req, res) => {
//   res.send("Hello World")
// })
// app.listen(port, () => {
//   console.log("서버 실행 중")
// })
var express_1 = require("express");
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.send("Hello World");
});
app.listen(port, function () {
    console.log("서버 실행 중");
});
