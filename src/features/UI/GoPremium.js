import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';


import CrownIcon from '../../assets/icons/crown.svg'
import WaveIcon from '../../assets/icons/wave.svg'

const {width, height} = Dimensions.get('window');

export default function GoPremium() {

  // loading Poppins fonts
  const [loaded] = useFonts({
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
  });

  if (!loaded) {
      return null;
  }

  return (
    <View style={{...styles.card}}>
      <LinearGradient start={{x:0, y:0}} end={{x:1 , y:1}} colors={['#FF6464', '#FB8989']} style={styles.cover_gradient}></LinearGradient>

      <View style={{marginHorizontal: 15, marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
        <CrownIcon width={20} height={20} />
        <Text style={{fontSize: 16,marginLeft: 10, color: "#FFF", fontFamily: 'Poppins-SemiBold'  }}>Bon Voyage Premium</Text>
      </View>

      <Text style={{fontSize: 12,marginLeft: 45,marginTop: 10, color: "#FFF", fontFamily: 'Poppins-Medium'  }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      </Text>

      <Pressable style={{...styles.premium_button }} >
        <Text style={{fontSize: 12, fontFamily: 'Poppins-SemiBold'  }}>Go Premium now</Text>
      </Pressable>

      <View style={{position: 'absolute' , zIndex: -1, bottom: 0, left: 0 }}>
        <WaveIcon width={(width/2)} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: "#FFF",
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: "#a1a0a0",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity:  0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  cover_gradient : {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: -2,
    width:"100%",
    height: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  premium_button: {
    marginLeft: 45,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: '#FFB534',
    width: "50%", 
    borderRadius: 8,  
    padding: 15,
    alignItems: 'center'
  }
})