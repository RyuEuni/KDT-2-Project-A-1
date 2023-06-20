import React, { useState, useEffect } from 'react';
import Url from './fetchURL'
import {getLoginInfo} from '../../Utils/Storage/loginStorage'
import { Styles, StylesColors, StylesText } from '../../View/style/styles';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';


export default function companyLoveCheck(cmpCode: string, cmpName: string, imgUrl:any){
  let [userName, setUserName] = useState('')
  let [likeCount, setlLkeCount] = useState('')
  let [likeType, setLikeType] = useState('')

  const user = async () => {
    const name = await getLoginInfo();
    console.log("여긴 ",name)
    setUserName(`${name}`)
  };
  user()

  const _URL = `${Url}:3080/likeCheck`
  const infoObj = {
    "code": cmpCode,
    "name": cmpName,
    "user": userName
  }

  fetch(_URL,{
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(infoObj)
  })
  .then(response => response.json())
  .then(json => {
    console.log("rufrhk: ", json);
    setlLkeCount(json.cnt);
    setLikeType(json.type)

  })
  .catch(error => {
    console.error('에러가 발생했습니다:', error);
  });

  console.log("sksksksk: ", likeType, likeCount)
  if(likeType){
    if(imgUrl === require('../../Resource/Icon/heart.png')){
      return (<Image style={Styles.companyHeartImg} source={imgUrl}></Image>)
    }
    else{
      return (<Image style={Styles.companyHeartImg} source={require('../../Resource/Icon/heart.png')}></Image>)
    }
    // return (require('../../Resource/Icon/heart.png'))
  }
  else{
    if(imgUrl === require('../../Resource/Icon/heart.png')){
      return (<Image style={Styles.companyHeartImg} source={imgUrl}></Image>)
    }
    else{
      return (<Image style={Styles.companyHeartImg} source={require('../../Resource/Icon/Empty_heart.png')}></Image>)
    }

    // return (require('../../Resource/Icon/Empty_heart.png'))
  }

}
