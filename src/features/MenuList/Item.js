import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function Item({ Icon, title, onPress, index}) {



  return (
    <Pressable style={{...styles.item, marginTop: index === 0 ? 0 : 10, backgroundColor: title === "Sign Out" ? "#EB5353" : "#FFF" }} onPress={onPress}>
      <Icon height={20} width={20} />
      <Text style={{...styles.title, color: title === "Sign Out" ? "#FFF" : "#000" }}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  item: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    borderColor: "#a9a9a95e",
    borderStyle: "solid",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: "#a1a0a0",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity:  0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  title : {
    marginLeft: 10,
    color: "#000",
    fontSize: 14,
    fontFamily: "Poppins-SemiBold"
  }
})