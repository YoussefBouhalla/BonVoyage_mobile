import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

import NavItem from './NavItem';

const {width, height} = Dimensions.get('window');


export default function Navbar({slides, currentSlideIndex, goToSlide, setCurrentSlideIndex}) {
  return (
    <View style={styles.navbar}>
      {slides.map((slide,index) => (
        <NavItem key={index} index={slide.id} currentSlideIndex={currentSlideIndex} goToSlide={goToSlide} setCurrentSlideIndex={setCurrentSlideIndex} />
      ))}
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