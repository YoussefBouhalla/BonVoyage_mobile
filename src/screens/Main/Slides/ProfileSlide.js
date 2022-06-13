import { StyleSheet, Text, View, Dimensions} from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('window');

export default function ProfileSlide() {
  return (
    <View style={{flex: 1, width}}>
      <Text>ProfileSlide</Text>
    </View>
  )
}

const styles = StyleSheet.create({})