import express from 'express';
const app = express();

app.post('/home', (req, res) => {
  // DB에서 데이터 조회 등의 로직 수행
  let body = "";
  request.on("data", function (data) {
    body = body + data;
  });
  request.on("end", function () {
    
  });
  // res.json(data);
});

app.listen(3008, () => {
  console.log('Server is listening on port 3000');
});