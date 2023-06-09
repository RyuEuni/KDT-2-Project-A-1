import express, {Request, Response} from 'express';
import {signCheck, signResult} from './signUp';
import { DBInfo } from './DBConnect';

const app = express();
DBInfo.connect(()=>{
  console.log('Database open! port is 3306')
})

app.post('/login', (req: Request, res: Response) => {

  let body = "";

  req.on("data", (data) => {
    body += data;
  });

  req.on("end", () => {

    // 넘겨받은 아이디와 비밀번호를 변수에 담기
    let loginDataid = JSON.parse(body).id


    // 쿼리문으로 해당 아이디가 유저 목록에 있는지 확인
    DBInfo.query(`select * from userinfo where ID='${loginDataid}'`, (error, result) => {
      // console.log(result)
      
      // 결과값을 전달.
      res.json(result)
    })
  });
});

app.post('/checkSignUp',(req:Request, res:Response) => {
  signCheck(req, res);

});

app.post('/resultSignUp',(req:Request, res:Response) => {
  signResult(req, res);

});

app.post('/findID',(req:Request, res:Response)=>{
  let datas=''
  req.on('data',(data)=>{
    datas +=data
  })

  req.on('end',()=>{
    
    const finderEmail = JSON.parse(datas).email
    const finderBirthdauy = JSON.parse(datas).birthday

    console.log(finderEmail, finderBirthdauy)

    DBInfo.query(`select ID from userinfo where email='${finderEmail}' and birthday='${finderBirthdauy}'`,(err,result)=>{
      if(err) console.error(err)
      console.log(result)
      res.json(JSON.stringify(result))
    })

  })

})

// 서버 포트 설정
app.listen(3080, () => {
  console.log("서버 돌아감");
});