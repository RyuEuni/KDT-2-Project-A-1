import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import { DBInfo } from '../../Utils/DB/DBConnect';

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
    let bidVolume = []; //매수호가 잔량
    let askPrice: any[] = []; //매도호가 가격
    let bidPrice = []; //매수호가 가격

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

    DBInfo.query(`insert into stockcallprice(buyPrice1,buyPrice2,buyPrice3,buyPrice4,buyPrice5,buyPrice6,buyPrice7,buyPrice8,buyPrice9,buyPrice10,buyTotalVolume,buyVolume1,buyVolume2,buyVolume3,buyVolume4,buyVolume5,buyVolume6,buyVolume7,buyVolume8,buyVolume9,buyVolume10) value('${bidPrice[0]}', '${bidPrice[1]}', '${bidPrice[2]}', '${bidPrice[3]}', '${bidPrice[4]}', ${bidPrice[5]}', '${bidPrice[6]}', '${bidPrice[7]}, '${bidPrice[8]}', '${bidPrice[9]}', '${allBidVolume}', '${bidVolume[0]}', '${bidVolume[1]}', '${bidVolume[2]}', '${bidVolume[3]}', '${bidVolume[4]}', '${bidVolume[5]}', '${bidVolume[6]}', '${bidVolume[7]}', '${bidVolume[8]}', '${bidVolume[9]}') stockdata where code='${code}'`, (error, data) => {
      if (error) throw error
      else {
        console.table("매수: ", data)
        DBInfo.query(`insert into stockcallprice(sellPrice1,sellPrice2,sellPrice3,sellPrice4,sellPrice5,sellPrice6,sellPrice7,sellPrice8,sellPrice9,sellPrice10,sellTotalVolumn,sellVolume1,sellVolume2,sellVolume3,sellVolume4,sellVolume5,sellVolume6,sellVolume7,sellVolume8,sellVolume9,sellVolume10) value('${askPrice[0]}', '${askPrice[1]}', '${askPrice[2]}', '${askPrice[3]}', '${askPrice[4]}', ${askPrice[5]}', '${askPrice[6]}', '${askPrice[7]}, '${askPrice[8]}', '${askPrice[9]}', '${allAskVolume}', '${askVolume[0]}', '${askVolume[1]}', '${askVolume[2]}', '${askVolume[3]}', '${askVolume[4]}', '${askVolume[5]}', '${askVolume[6]}', '${askVolume[7]}', '${askVolume[8]}', '${askVolume[9]}') stockdata where code='${code}'`, (error, data) => {
          if (error) throw error
          else {
            console.table("매도: ", data)
          }
        })
      }
    })

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