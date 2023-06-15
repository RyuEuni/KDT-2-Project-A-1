import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import {Styles, StylesColors, StylesText} from '../../View/style/styles'
import changeCurrency from './changeCurrency'
import urlIpt from './fetchURL'


interface Companydata {
  companyname: string
  price: number
  code: string
}


export default function realtimeContent({navigation}, activeTab: string) {
  
  const _URL = `${urlIpt}:5000/stock/realTime`
  const realtimedata = [] as any
  const codeObj = {
    "type": activeTab
  }
  
  useEffect(()=>{
    fetchData()
  },[])


  const fetchData = () => {
      fetch(_URL,{
      // fetch(`http://192.168.100.81:5000/stock/realTime`,{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(codeObj)
    })
      .then(response => response.json())
      .then(result => {
        realtimedata.length = 0
        for(let i = 0; i < result["data"].length; i++){
          let val = {
            companyname: result.name[i],
            price: result.data[i],
            code: result.code[i]
          }
          realtimedata.push(val)
        }
        
      })
      .catch(error => {
        console.error('에러가 발생했습니다:', error);
      });
  };
  useEffect(()=>{
    fetchData()
  },[activeTab])

  

  const listStyle = (data: Companydata) => {
    if(activeTab === 'up'){
      return (<Text style={[Styles.rankingCompanyText, {color:'red'}]}>
      {data.price}%
    </Text> )
    }
    else if(activeTab === 'down'){
      return (<Text style={[Styles.rankingCompanyText, {color:'blue'}]}>
      {data.price}%
    </Text> )
    }
    else if(activeTab === 'TopVlm'){
      return (<Text style={Styles.rankingCompanyText}>
        {changeCurrency(data.price)}개
      </Text> )
    }
    else if(activeTab === 'TopTrd'){
      return (<Text style={Styles.rankingCompanyText}>
        {changeCurrency(data.price)}만원
      </Text> )
    }
  }
  const companylist = (data: Companydata) => {
    return (
      <View style={Styles.rankingCompany}>
        <TouchableOpacity style={Styles.rankingCompanyName} onPress={() => navigation.navigate('companyDetail', { 
          name: data.companyname,
          code: data.code
        })
        }>
          <Text style={Styles.rankingCompanyText}>{data.companyname}</Text>
        </TouchableOpacity>
        <View style={Styles.rankingCompanyPrice}>
          {listStyle(data)}
        </View>
      </View>
    )
    
  }
  switch (activeTab) {
    case 'up':
      console.log("정보 진입")
      return (
        <FlatList
          data={realtimedata}
          renderItem={({ item }) => companylist(item)} />
      )
    case 'down':
      return (
        <FlatList
          data={realtimedata}
          renderItem={({ item }) => companylist(item)} />
      )
    case 'TopVlm':
      return (
        <FlatList
          data={realtimedata}
          renderItem={({ item }) => companylist(item)} />
      )
    case 'TopTrd':
      return (
        <FlatList
          data={realtimedata}
          renderItem={({ item }) => companylist(item)} />
      )
  
  }

}