import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Item from './Item'

export default function List({ list }) {
  return (
    <View style={{...styles.list}}>
      {
        list.map( (item , index) => (
          <Item key={index} index={index} Icon={item.Icon} title={item.title} onPress={item.onPress}  />
         ) )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  list : {
    marginHorizontal: 15,
  }
})