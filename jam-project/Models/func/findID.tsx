import { response } from "express";
import React from "react";
import { Alert } from "react-native";

export const findID=(email:string,birthday:number)=>{
  let findID={
    email:email,
    birthday:birthday
  }

  fetch('/findID',{
  method:'post',
  body:JSON.stringify(findID)
  })
  .then(response=>response.json())
  .then(data=>{
    console.log(data)
    // DB에서 받은 결과 도출
    if(typeof data==='string'){
      Alert.alert('잼픽이가 찾은 아이디!',`고객님의 아이디는 ${data}입니다!`)
    }else{
      Alert.alert('','입력하신 정보가 일치하지 않습니다.')
    }
  })
  .catch(err=>console.error('warning!!!',err))
}