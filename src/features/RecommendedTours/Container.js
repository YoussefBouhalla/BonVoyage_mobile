import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from './Card'

import { getRecommendedTours } from '../../services/ToursServices';

const {width, height} = Dimensions.get('window');

export default function Container() {

  const [tours, setTours] = useState([])

  useEffect(() => {
    getRecommendedTours().then(res =>{
      setTours(res.data)
    });
    
  }, [])
  

  return (
    <View style={{...styles.container}}>
      {
        tours.map((tour, index) => (
          <Card key={index} tour={tour} index={index} />
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    
  }
})