import { StyleSheet, Text, Pressable, Dimensions } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('window');


export default function AuthButton({content, onPress}) {


  return (
    <Pressable  style={styles.btn_login}  onPress={onPress} >
      <Text style={styles.btn_text}>{content}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  btn_login: {
    display: "flex",
    width : width - 30,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#EB5353",
    height: 60,
    padding: 10,
    shadowColor: "#a1a0a0",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity:  0.17,
    shadowRadius: 2.54,
    elevation: 3
},
btn_text : {
  color: "#ECECEC",
  fontFamily: "Poppins-SemiBold",
  fontSize: 18,
},
})