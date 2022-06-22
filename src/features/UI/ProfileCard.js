import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as SecureStore from 'expo-secure-store'
import jwt from 'jwt-decode'
import React, {useEffect, useState} from 'react';


import CrownIcon from '../../assets/icons/crown.svg';
import RightArrowIcon from '../../assets/icons/rightArrow.svg';

export default function ProfileCard({onPress}) {

  const [user, setUser] = useState({})

  useEffect(() => {
    SecureStore.getItemAsync("token").then((token) => {
      setUser(jwt(token));
    });
  }, [])

  return (
    <Pressable style={{...styles.card}} onPress={onPress}>
      <LinearGradient colors={['#00000080', '#00000080']} style={styles.cover_gradient}></LinearGradient>
      <ImageBackground source={{uri: `http://192.168.137.1:3000/users/${user.id}/profile/cover` }} style={styles.card_image} />

      <View style={{display: 'flex', flexDirection: 'row',marginVertical: 7, marginHorizontal: 10 }}>
        <View style={{position: 'relative'}}>
          <View style={{...styles.icon}}>
            <ImageBackground source={{uri: `http://192.168.137.1:3000/users/${user.id}/profile/image` }} style={styles.card_image} />
          </View>

          <View style={{...styles.online}}>

          </View>
        </View>

        <View style={{display: 'flex', flexDirection: 'column',marginLeft: 10, justifyContent: 'center' }}>
            <Text style={{...styles.username}}>{user.firstname} {user.lastname}</Text>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              {
                user.role === 'premium' &&
                  <CrownIcon height={11} width={11} />
              }
              <Text style={{...styles.role, marginLeft: user.role === "premium" ? 5 : 0}}>{user.role} user</Text>
            </View>
        </View>

        <View style={{marginLeft: 'auto', alignSelf: "center"}}>
          <RightArrowIcon height={20} width={20} />
        </View>

      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 8,
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
  icon :{
    width: 60,
    height: 60,
    borderRadius: 999,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: "#FFF"
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
  username : {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Poppins-SemiBold"
  },
  role :{
    color: "#FFF",
    fontSize: 12,
    fontFamily: "Poppins-Medium"
  },
  online: {
    position: 'absolute',
    top: 45,
    left: 45,
    zIndex: 2,
    backgroundColor: "#1CA70C",
    height: 12,
    width: 12,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#FFF",
    
  }
})