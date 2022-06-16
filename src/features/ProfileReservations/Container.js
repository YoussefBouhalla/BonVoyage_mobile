import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import ReservationFilterBar from '../UI/ReservationFilterBar';
import ScrollContainer from './ScrollContainer';

const {width, height} = Dimensions.get('window');

export default function Container() {
  return (
    <View style={{flex: 1, width, marginTop: 10}}>
      <ReservationFilterBar />
      <ScrollContainer />
    </View>
  )
}

const styles = StyleSheet.create({})