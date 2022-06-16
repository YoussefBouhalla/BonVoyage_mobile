import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

import Item from './Item'

const {width, height} = Dimensions.get('window');


export default function Navbar({setCurrentIndex, currentIndex}) {
  return (
    <View style={styles.navbar}>
      <Item setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} index={0} title="Favorite Tours" />
      <Item setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} index={1} title="My Reservations" />
      <Item setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} index={2} title="My Stays" />
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