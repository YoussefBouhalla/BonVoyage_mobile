import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';


import EditWhiteIcon from '../../assets/icons/editWhite.svg';
import MapIcon from '../../assets/icons/map.svg';

export default function ProfileActions() {

  // loading Poppins fonts
  const [loaded] = useFonts({
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{...styles.actions}}>
      <Pressable style={{...styles.actionButton, backgroundColor: "#DBDBDB"}}>
        <MapIcon height={17} width={17} />
        <Text style={{fontFamily: 'Poppins-Bold', color: "#000", fontSize: 12, marginLeft: 5}}>Visite Tours</Text>
      </Pressable>

      <Pressable style={{...styles.actionButton, marginLeft: 10, backgroundColor: "#EB5353"}}>
        <EditWhiteIcon height={17} width={17} />
        <Text style={{fontFamily: 'Poppins-Bold', color: "#FFF", fontSize: 12, marginLeft: 5}}>Edit Profile</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  actions : {
    marginHorizontal: 15,
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50
  },
  actionButton : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 6,
    shadowColor: "#a1a0a0",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity:  0.17,
    shadowRadius: 2.54,
    elevation: 3,
    
  }
})