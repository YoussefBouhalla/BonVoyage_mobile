import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import * as SecureStore from 'expo-secure-store'
import jwt from 'jwt-decode'
import React, {useEffect, useState} from 'react';

import CrownIcon from '../../assets/icons/crown.svg'


export default function ProfileHeader() {

  const [user, setUser] = useState({})

  useEffect(() => {
    SecureStore.getItemAsync("token").then((token) => {
      setUser(jwt(token));
    });
  }, [])

  return (
    <View style={{...styles.card}}>
      <LinearGradient colors={['#00000024', '#000000ac']} style={styles.cover_gradient}></LinearGradient>
      <ImageBackground source={{uri: `http://192.168.137.1:3000/users/${user.id}/profile/cover` }} style={styles.card_image} />

      <View style={{...styles.icon, marginBottom: 10}}>
        <ImageBackground source={{uri: `http://192.168.137.1:3000/users/${user.id}/profile/image` }} style={styles.card_image} />
      </View>


      <View style={{display: 'flex', flexDirection: 'column',marginLeft: 10, justifyContent: 'center', alignItems: "center", marginBottom: 10 }}>
        <Text style={{...styles.username}}>{user.firstname} {user.lastname}</Text>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          {
            user.role === 'premium' &&
              <CrownIcon height={15} width={15} />
          }
          <Text style={{...styles.role, marginTop: 3}}>{user.role} user</Text>
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