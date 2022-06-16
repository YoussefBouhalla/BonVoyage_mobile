import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import FavoriteSearchBar from '../UI/FavoriteSearchBar';
import FavoriteFilterBar from '../UI/FavoriteFilterBar';
import ScrollContainer from './ScrollContainer';

const {width, height} = Dimensions.get('window');

export default function favorite({handleBottomSheet}) {
  return (
    <View style={{flex: 1, width, marginTop: 10}}>
      <FavoriteSearchBar handleBottomSheet={handleBottomSheet} />
      <FavoriteFilterBar />
      <ScrollContainer />
    </View>
  )
}

const styles = StyleSheet.create({})