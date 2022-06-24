import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React , {useEffect, useState} from 'react'
import * as SecureStore from 'expo-secure-store'
import jwt from 'jwt-decode'

import Item from './Item'

const {width, height} = Dimensions.get('window');



export default function Navbar({setCurrentIndex, currentIndex}) {

  const [user, setUser] = useState({})
  useEffect(() => {
    SecureStore.getItemAsync("token").then((token) => {
      if (jwt(token).role !== 'premium') {
        setUser(jwt(token))
      }
    });
  }, [])
  
  return (
    <View style={styles.navbar}>
      <Item setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} index={0} title="Favorite Tours" />
      <Item setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} index={1} title="My Reservations" />
      {
        user.role === 'premium' &&
          <Item setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} index={2} title="My Stays" />  
      }
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    width,
    height: 60,
    backgroundColor: "#FFF",
    borderBottomColor: "#a9a9a95e",
    borderBottomWidth: 1
  }
})