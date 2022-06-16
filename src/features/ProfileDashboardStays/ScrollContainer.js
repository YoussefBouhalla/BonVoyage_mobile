import { StyleSheet, Text, View, ScrollView,Dimensions } from 'react-native'
import React from 'react'
import Card from './Card';
import AddCard from './AddCard';

const {width, height} = Dimensions.get('window');

export default function ScrollContainer() {
  return (
    <ScrollView style={{...styles.scroll}} contentContainerStyle={{paddingBottom: 10}}>
      <Card />
      <Card />
      <AddCard />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll :{
    flexGrow: 0,
    height: height - 450 ,
    paddingBottom: 10,
  }
})