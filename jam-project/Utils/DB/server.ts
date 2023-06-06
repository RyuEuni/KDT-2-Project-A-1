import express, { Request, Response } from 'express';

const app = express();

app.post('/database', (req: Request, res: Response) => {
  // DB에서 데이터 조회 등의 로직 수행
  let body = "";

  req.on("data", (data) => {
    body += data;
  });
  req.on("end", () => {
    console.log("확인중" + body)
    res.json(JSON.parse(body))
  });
});

app.listen(3080, () => {
  console.log('Server is listening on port 3080');
  // console.log(app.request.url)
});