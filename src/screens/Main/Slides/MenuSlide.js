import { StyleSheet, Text, View, Dimensions} from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('window');

export default function MenuSlide() {
  return (
    <View style={{flex: 1, width}}>
      <Text>MenuSlide</Text>
    </View>
  )
}

const styles = StyleSheet.create({})