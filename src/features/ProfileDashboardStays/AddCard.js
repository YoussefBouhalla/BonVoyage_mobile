import { StyleSheet, Text, View, Pressable,  } from 'react-native'
import React from 'react'

import PlusIcon from '../../assets/icons/plus.svg'






export default function AddCard({}) {



  return (
    <Pressable style={{...styles.card, marginTop: 10, marginBot: 10}}>
      <PlusIcon height={40} width={40} />
      <Text style={{...styles.title}}>Add a stay</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    marginHorizontal: 15,
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: "#C5C5C5",
    borderWidth: 5,
    borderStyle: 'dashed',

  },
  title : {
    marginHorizontal: 5,
    color: "#C5C5C5",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold"
  }
})