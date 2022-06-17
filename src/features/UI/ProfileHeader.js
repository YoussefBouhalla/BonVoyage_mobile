import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';

import CrownIcon from '../../assets/icons/crown.svg'


export default function ProfileHeader() {
  return (
    <View style={{...styles.card}}>
      <LinearGradient colors={['#00000024', '#000000ac']} style={styles.cover_gradient}></LinearGradient>
      <ImageBackground source={{uri: `https://scontent.fcmn1-2.fna.fbcdn.net/v/t1.6435-9/49119891_575649722897523_6474445259194499072_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=KJZfGTDNWhoAX_Tbln9&_nc_ht=scontent.fcmn1-2.fna&oh=00_AT_Iy0iVLc_V7EOxFHjSSQ3euMlOvzxTIUSkUEOBK0tG0Q&oe=62CE2643` }} style={styles.card_image} />

      <View style={{...styles.icon, marginBottom: 10}}>
        <ImageBackground source={{uri: `https://scontent.fcmn1-1.fna.fbcdn.net/v/t1.6435-9/189291492_1192288864566936_3467608870586354046_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZU99pusxuXcAX9q64a0&tn=3SSixveo5-B0na2e&_nc_ht=scontent.fcmn1-1.fna&oh=00_AT_GvsSlHS_ZAvLi41ingNPB98hWg0vc8ALx4WzCyASxAg&oe=62CDCA7A` }} style={styles.card_image} />
      </View>


      <View style={{display: 'flex', flexDirection: 'column',marginLeft: 10, justifyContent: 'center', alignItems: "center", marginBottom: 10 }}>
        <Text style={{...styles.username}}>Youssef Bouhalla</Text>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <CrownIcon height={15} width={15} />
          <Text style={{...styles.role, marginTop: 3}}>Premium owner</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 250,
    backgroundColor: "#fff",
    overflow: 'hidden',
    shadowColor: "#a1a0a0",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity:  0.17,
    shadowRadius: 2.54,
    elevation: 3,
    borderColor: "#a9a9a95e",
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  cover_gradient : {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    width:"100%",
    height: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  card_image: {
    position: 'absolute',
    zIndex: -1,
    height: "100%",
    width: "100%"
  },
  icon :{
    width: 100,
    height: 100,
    borderRadius: 999,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: "#FFF"
  },
  username : {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold"
  },
  role :{
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    marginLeft: 5
  },
})