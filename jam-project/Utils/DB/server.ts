import express, { Request, Response } from 'express';
import { DBInfo } from './DBConnect';

const app = express();

DBInfo.connect()

interface Body {
  id: string
  pw: string
}


app.post('/database', (req: Request, res: Response) => {
  // DB에서 데이터 조회 등의 로직 수행

  let body: Body;

  req.on("data", (data) => {
    body += data;
  });
  req.on("end", () => {
    console.log("확인중" + body)

    DBInfo.query(`select * from testID where ID=${body.id}`, (error, result) => {
      console.log(result)

      

    })

    // res.json(JSON.parse(body))
  });
});

app.listen(3080, () => {
  console.log('Server is listening on port 3080');
});