import express, {Request, Response} from 'express';
import {signCheck, signResult} from './signUp';
import { DBInfo } from './DBConnect';

const app = express();
DBInfo.connect(()=>{
  console.log('Database open! port is 3306')
})

app.post('/login', (req: Request, res: Response) => {
  // DB에서 데이터 조회 등의 로직 수행

  let body = "";

  req.on("data", (data) => {
    body += data;
  });

  req.on("end", () => {
    // console.log("확인중" + body)

    // console.log(typeof body)
    // console.log(JSON.parse(body))
    // console.log(JSON.parse(body).id)

    // 넘겨받은 아이디와 비밀번호를 변수에 담기
    let loginDataid = JSON.parse(body).id
    let loginDatapw = JSON.parse(body).pw

    // console.log(loginDataid)

    // 쿼리문으로 해당 아이디가 유저 목록에 있는지 확인
    DBInfo.query(`select * from testID where ID='${loginDataid}'`, (error, result) => {
      // console.log(result)
      
      // 결과값을 전달.
      res.json(result)
    })
  });
});

app.post('/checkSignUp',(request:Request, response:Response) => {
  signCheck(request, response);

});
app.post('/resultSignUp',(request:Request, response:Response) => {
  signResult(request, response);

});

// 서버 포트 설정
app.listen(3080, () => {
  console.log("서버 돌아감");
});