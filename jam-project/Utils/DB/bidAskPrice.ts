import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import { DBInfo } from './DBConnect';

export function bidAskPriceInsert(request: Request, response: Response) {

  let body = "";

  request.on("data", function (data) {
    body = body + data;
  });
  request.on("end", function () {
    let bodySplit = body.split('{')
    bodySplit = bodySplit[1].split('}')
    bodySplit = bodySplit[0].split(',')
    console.log("price data: ", bodySplit)

    let code = bodySplit[0].split('"')[3];
    let accuVolume = bodySplit[bodySplit.length - 3].split('"')[3];
    let allAskVolume = bodySplit[bodySplit.length - 2].split('"')[3];
    let allBidVolume = bodySplit[bodySplit.length - 1].split('"')[3];
    console.log("aaa: ", code, accuVolume, allAskVolume, allBidVolume, bodySplit.length - 3)

    let askVolume: any[] = []; //매도호가 잔량
    let bidVolume: any[] = []; //매수호가 잔량
    let askPrice: any[] = []; //매도호가 가격
    let bidPrice: any[] = []; //매수호가 가격

    for (let i = 1; i < bodySplit.length - 3; i++) {
      if (i < 21) {
        if (i % 2 == 0) {
          askVolume.push(bodySplit[i].split('"')[1])
        }
        else {
          askPrice.push(bodySplit[i].split('"')[3])
        }
      }
      else {
        if (i % 2 == 0) {
          bidVolume.push(bodySplit[i].split('"')[1])
        }
        else {
          bidPrice.push(bodySplit[i].split('"')[3])
        }
      }
    }

    console.log("data: ", code)
    DBInfo.query(`select companyname from stockdata where code = '${code}'`, (error, data) => {
      if (error) throw error
      else {
        const cpyName = data;
        DBInfo.query(`select code from stockcallprice where code = '${code}'`, (error, data) => {
          if (error) throw error
          else {
            if(data){
            }
            else{
              DBInfo.query(`insert into stockcallprice values ('${code}', '${cpyName}','${askPrice[0]}','${askPrice[1]}', '${askPrice[2]}', '${askPrice[3]}', '${askPrice[4]}', '${askPrice[5]}','${askPrice[6]}', '${askPrice[7]}', '${askPrice[8]}', '${askPrice[9]}', '${allAskVolume}','${askVolume[0]}', '${askVolume[1]}', '${askVolume[2]}', '${askVolume[3]}', '${askVolume[4]}', '${askVolume[5]}', '${askVolume[6]}', '${askVolume[7]}', '${askVolume[8]}', '${askVolume[9]}','${bidPrice[0]}', '${bidPrice[1]}', '${bidPrice[2]}', '${bidPrice[3]}','${bidPrice[4]}', '${bidPrice[5]}', '${bidPrice[6]}', '${bidPrice[7]}', '${bidPrice[8]}', '${bidPrice[9]}','${allBidVolume}', '${bidVolume[0]}', '${bidVolume[1]}', '${bidVolume[2]}', '${bidVolume[3]}', '${bidVolume[4]}', '${bidVolume[5]}', '${bidVolume[6]}', '${bidVolume[7]}', '${bidVolume[8]}', '${bidVolume[9]}'`)

              response.writeHead(200)
              response.end()
            }
          }
        });
      }
    })
    // DBInfo.query(`update stockcallprice set buyPrice1= where code='${code}'`, (error, data) => {
    //   if (error) throw error
    //   else {
    //     // console.table("매수: ", data)
    //     DBInfo.query(`update stockcallprice set sellPrice1='${askPrice[0]}',sellPrice2='${askPrice[1]}',sellPrice3='${askPrice[2]}',sellPrice4='${askPrice[3]}',sellPrice5='${askPrice[4]}',sellPrice6='${askPrice[5]}',sellPrice7='${askPrice[6]}',sellPrice8='${askPrice[7]}',sellPrice9='${askPrice[8]}',sellPrice10='${askPrice[9]}', sellTotalVolume='${allAskVolume}',sellVolume1='${askVolume[0]}',sellVolume2='${askVolume[1]}',sellVolume3='${askVolume[2]}',sellVolume4='${askVolume[3]}',sellVolume5='${askVolume[4]}',sellVolume6='${askVolume[5]}',sellVolume7='${askVolume[6]}',sellVolume8='${askVolume[7]}',sellVolume9='${askVolume[8]}',sellVolume10='${askVolume[9]}' where code='${code}'`, (error, data) => {
    //       if (error) throw error
    //       else {
    //         // console.table("매도: ", data)
    //       }
    //     });
    //     response.writeHead(200)
    //     response.end()
    //   }
    // })

  });

}

export function stockCodeSend(request: Request, response: Response) {

  DBInfo.query(`select code,companyname from stockdata`, (error, data) => {
    if (error) throw error
    else {
      console.log("saaaaa: ", data)

      response.writeHead(200)
      response.end(JSON.stringify(data))
    }
  });
}