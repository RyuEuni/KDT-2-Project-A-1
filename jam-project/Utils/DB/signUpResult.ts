import mysql from 'mysql2';
import express, {Request, Response} from 'express';
import { json } from 'body-parser';

const mysqlInfo = {
  host: "192.168.100.77",
  user: "euni",
  password: "0000",
  database: "jamstock",
}

