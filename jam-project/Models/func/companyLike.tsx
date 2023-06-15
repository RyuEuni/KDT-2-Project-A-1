import React, { useState, useEffect } from 'react';
import Url from './fetchURL'
import { Styles, StylesColors, StylesText } from '../../View/style/styles';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import {getLoginInfo} from '../../Utils/Storage/loginStorage'


export default function companyLoveInsert(cmpCode: string, cmpName: string){
  let [userName, setUserName] = useState('')
  let [likeCount, setlLkeCount] = useState('')
  let [likeType, setLikeType] = useState('')

  const user = async () => {
    const name = await getLoginInfo();
    console.log("여긴 ",name)
    setUserName(`${name}`)
  };
  user()

  const _URL = `${Url}:3080/companyLike`
  const infoObj = {
    "code": cmpCode,
    "name": cmpName,
    "user": userName
  }

  console.log("좋아요 기능에 도착함")
  fetch(_URL,{
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(infoObj)
  })
  .then(response => response.json())
  .then(json => {
    console.log("나나나나나: ", json);

  })
  .catch(error => {
    console.error('에러가 발생했습니다:', error);
  });

  // console.log("ㅁ늠누나: ", likeType, likeCount)
  // if(likeType){
  //   return (
  //     <Image style={Styles.companyHeartImg} source={require('../../Resource/Icon/heart.png')}></Image>
  //   )
  // }
  // else{
  //   return (
  //     <Image style={Styles.companyHeartImg} source={require('../../Resource/Icon/Empty_heart.png')}></Image>
  //   )
  // }

}
