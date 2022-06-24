import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import ScrollContainer from './ScrollContainer';

const {width, height} = Dimensions.get('window');

export default function favorite() {
  return (
    <View style={{flex: 1, width, marginTop: 10}}>
      <ScrollContainer />
    </View>
  )
}

const styles = StyleSheet.create({})