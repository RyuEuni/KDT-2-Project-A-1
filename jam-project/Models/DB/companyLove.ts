import mysql from 'mysql2';
import express, { Request, Response } from 'express';
import { DBInfo } from '../../Utils/DB/DBConnect';


export function loveCheck(request: Request, response: Response) {

  let body = "";

  request.on("data", function (data) {
    body = body + data;
  });
  request.on("end", function () {
    let bodySplit = body.split('"')
    const code = bodySplit[3]
    const name = bodySplit[7]
    const id = bodySplit[11]

    console.log(code,name,id)
    DBInfo.query(
      `SELECT userID FROM lovecompany WHERE companyname = '${name}'`,
      (err, data) => {
        if(err) throw err;
        else{
          let like:any = data;
          let postLikeCount:any;
          let likeRe = {};

          DBInfo.query(`SELECT JSON_LENGTH(JSON_EXTRACT(userID, '$.likeUser')) AS like_count FROM lovecompany WHERE companyname = '${name}'`,
          (err, data:any) => {
            if(err) throw err;
            else{
              postLikeCount = data[0].like_count

              if(like === null || like.length === 0){
                console.log("값이 없거나 null입니다", like)

                likeRe = {
                  'type': false,
                  'cnt': postLikeCount
                }
                response.writeHead(200);
                response.end(JSON.stringify(likeRe));
              }
              else{
                const likeUserArr = like[0].userID.likeUser;

                if (likeUserArr.includes(id)) {
                  likeRe = {
                    'type': true,
                    'cnt': postLikeCount
                  }
                  
                  response.writeHead(200);
                  response.end(JSON.stringify(likeRe));
                }
                else{
                  likeRe = {
                    'type': false,
                    'cnt': postLikeCount
                  }

                  response.writeHead(200);
                  response.end(JSON.stringify(likeRe));
                }
              }
            }
          });
        }
      });
  });
}

export function loveInput(request: Request, response: Response) {

  let body = "";

  request.on("data", function (data) {
    body = body + data;
  });
  request.on("end", function () {
    //console.log('결과2: ', body)

    let bodySplit = body.split('"')
    const code = bodySplit[3]
    const name = bodySplit[7]
    const id = bodySplit[11]
    console.log("찜 input: ",code,name,id)

    DBInfo.query(
      `SELECT * FROM lovecompany WHERE companyname = '${name}'`, 
      (error, data) => {
        if (error) throw error;
        else {
          const like:any = data;
          let likeResult:boolean;
          //console.log(like);

          // 1. post_like가 null일 경우 새로운 배열을 생성하여 likeUser 추가
          if (like === null || like.length === 0) {
            DBInfo.query(`INSERT INTO lovecompany (companyname, userID) VALUES ('${name}', '{"likeUser":["${id}"]}')`);
            likeResult = true;
          } 
          else {
            const likeUserArr = like[0].userID.likeUser

            // 2. likeUser 배열에 이미 존재하는 경우 해당 값을 삭제
            if (likeUserArr.includes(id)) {
              let cnt = likeUserArr.indexOf(id);
              //console.log(cnt);
              DBInfo.query(`UPDATE lovecompany SET userID = JSON_REMOVE(userID, '$.likeUser[${cnt}]') WHERE companyname = '${name}'`);
              likeResult = false;
            } 
            // 3. likeUser 배열에 존재하지 않는 경우 해당 값을 추가
            else {
              DBInfo.query(`UPDATE lovecompany SET userID = JSON_ARRAY_APPEND(userID, '$.likeUser', '${id}') WHERE companyname = '${name}'`);
              likeResult = true;
            }
          }
          DBInfo.query(`SELECT JSON_LENGTH(JSON_EXTRACT(userID, '$.likeUser')) AS like_count FROM lovecompany WHERE companyname = '${name}'`,
            (err, data:any) => {
              if(err) throw err;
              else{
                console.log("like count: ", data[0].like_count)
                let likeCount = data[0].like_count;
                let likeRes = {};

                response.writeHead(200);
                if(likeResult){
                  likeRes = {
                    'type': true,
                    'cnt': likeCount
                  }
                  
                  response.end(JSON.stringify(likeRes));
                }
                else{
                  likeRes = {
                    'type': false,
                    'cnt': likeCount
                  }
                  response.end(JSON.stringify(likeRes));
                }
              }
            }
          )
        }
    });
  });

}