
// import express from 'express'
// // import * as express from 'express';

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send("Hello World")
// })

// app.listen(port, () => {
//   console.log("서버 실행 중")
// })

import exp, { Request, Response } from 'express';

const app = exp();
const port = 3000;


app.get('/', (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("서버 실행 중");
});

