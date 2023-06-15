import mysql from 'mysql2';
import express, { Request, Response } from 'express';
import { DBInfo } from '../../Utils/DB/DBConnect';


export function loveCheck(request: Request, response: Response) {

  let body = "";

  request.on("data", function (data) {
    body = body + data;
  });
  request.on("end", function () {
    console.log('결과: ', body)


  });

}

export function loveInput(request: Request, response: Response) {

  let body = "";

  request.on("data", function (data) {
    body = body + data;
  });
  request.on("end", function () {
    console.log('결과: ', body)


  });

}