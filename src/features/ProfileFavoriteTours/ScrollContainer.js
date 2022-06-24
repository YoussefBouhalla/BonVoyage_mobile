import { StyleSheet, Text, View, ScrollView,Dimensions } from 'react-native'
import React , { useEffect , useState } from 'react'
import jwt from 'jwt-decode';
import * as SecureStore from 'expo-secure-store';

import Card from './Card';
import { getFavoriteTours } from '../../services/ToursServices';

const {width, height} = Dimensions.get('window');

export default function ScrollContainer() {

  const [tours, setTours] = useState([])

  useEffect(() => {
    SecureStore.getItemAsync("token").then(async (token) => {
      getFavoriteTours(jwt(token).id).then(res => {
        setTours(res.data)
      })
    });
    
  }, [])
  
  return (
    <ScrollView style={{...styles.scroll}} contentContainerStyle={{paddingBottom: 10}}>
      {
        tours.map((tour, index) => (
          <Card key={index} tour={tour.tours} />
        ) )
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll :{
    flexGrow: 0,
    height: height - 450,
    paddingBottom: 10,
  }
})