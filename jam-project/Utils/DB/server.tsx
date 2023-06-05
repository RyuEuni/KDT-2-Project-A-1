import express, {Request, Response} from 'express';

const app = express();

app.post('/home', (req:Request, res:Response) => {
  // DB에서 데이터 조회 등의 로직 수행
  let body = "";
  req.on("data", function (data) {
    body = body + data;
  });
  req.on("end", function () {
    console.log("ehla?"+body)
  });
  // res.json(data);
});

app.listen(3080, () => {
  console.log('Server is listening on port 3080');
});