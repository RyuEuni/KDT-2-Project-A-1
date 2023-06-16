import React, { useState, useEffect } from 'react';
import Url from './fetchURL'


export default function companyLove(cmpCode: string, cmpName: string){
  const infoObj = {
    "code": cmpCode,
    "name": cmpName
  }
  
  const UrlCheck = `${Url}:3080/likeCheck`
  const UrlLove = `${Url}:3080/companyLike`

  // const fetchData = (url:string) => {
  fetch(UrlCheck,{
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(infoObj)
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
    })
    .catch(error => {
      console.error('에러가 발생했습니다:', error);
    });
  // };
  // useEffect(()=>{
  //   fetchData()
  // },[cmpCode])
}