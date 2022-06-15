import { StyleSheet, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Card from './Card';
import { useSelector } from "react-redux";

const {width, height} = Dimensions.get('window');

export default function ScrollContainer({ tours }) {

  const ourToursSearch = useSelector(state => state.OurToursSearch)

  return (
    <ScrollView style={{...styles.scroll}} contentContainerStyle={{paddingBottom: 10}}>
      {
        tours.map((tour, index) => (
          <Card key={index} index={index} length={tours.length} tour={tour} />
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll :{
    flexGrow: 0,
    height: height - 241,
    paddingBottom: 10
  }
})