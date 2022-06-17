import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({marginLeft , marginRight, title, number, Icon}) {
  return (
    <View style={{...styles.card, marginLeft, marginRight}}>
        <Icon height={30} width={30} />
        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, color: "#FFF" }}>{title}</Text>
        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, color: "#FFF" }}>{number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: 6,
        backgroundColor: "#ffffff72",
        paddingVertical: 15
    }
})