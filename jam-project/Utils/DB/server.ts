import express, {Request, Response} from 'express';
import {signCheck, signResult} from './signUp';

const app = express();

app.post('/checkSignUp',(request:Request, response:Response) => {
  signCheck(request, response);

});
app.post('/resultSignUp',(request:Request, response:Response) => {
  signResult(request, response);

});

// 서버 포트 설정
app.listen(3000, () => {
  console.log("서버 돌아감");
});