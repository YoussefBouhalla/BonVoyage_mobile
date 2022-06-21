import { StyleSheet, Text, View, Dimensions,ImageBackground } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';


import StarUnfilledIcon from '../../assets/icons/starUnfilled.svg'
import LocationIcon from '../../assets/icons/location.svg'
import StarFilledIcon from '../../assets/icons/starFilled.svg'
import StarUnfilledYellowIcon from '../../assets/icons/starUnfilledYellow.svg'

const {width, height} = Dimensions.get('window');

export default function Card({marginTop}) {

  // loading Poppins fonts
  const [loaded] = useFonts({
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!loaded) {
      return null;
  }

  return (
    <View style={{...styles.card, marginTop}}>
      <LinearGradient colors={['#00000024', '#000000ac']} style={styles.cover_gradient}></LinearGradient>
      <ImageBackground source={{uri: `https://scontent.fcmn1-2.fna.fbcdn.net/v/t1.6435-9/49119891_575649722897523_6474445259194499072_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=KJZfGTDNWhoAX_Tbln9&_nc_ht=scontent.fcmn1-2.fna&oh=00_AT_Iy0iVLc_V7EOxFHjSSQ3euMlOvzxTIUSkUEOBK0tG0Q&oe=62CE2643` }} style={styles.card_image} />

      <View style={{position: 'absolute', top: 5, left: 5}}>
        <StarUnfilledIcon height={30} width={30} />
      </View>

      <View style={{marginTop: 'auto'}}>

        <Text style={{...styles.title}}>Akchour waterfalls</Text>

        <View style={{...styles.location}}>
          <LocationIcon height={12} width={12}/>
          <Text style={{...styles.city}}>Chefchaouen</Text>
        </View>

        <View style={{...styles.rating}}>
          {
            Array.from(Array(parseInt(4)) , (e, index) => (
              <StarFilledIcon height={15} width={15} key={index} />
            ))
          }
          {
            Array.from(Array(5 - parseInt(4)) , (e, index) => (
              <StarUnfilledYellowIcon height={15} width={15} key={index} />
            ))
          }
          
          <Text style={{...styles.rate}}>{4}.0</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: (width /2) - 20,
    height: (width /2) - 20,
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
  title : {
    marginTop: 150,
    marginHorizontal: 5,
    color: "#FFF",
    fontSize: 12,
    fontFamily: "Poppins-SemiBold"
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 5,
  },
  city: {
    marginHorizontal: 5,
    color: "#FFF",
    fontSize: 10,
    fontFamily: 'Poppins-SemiBold'
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  rate :{
    marginHorizontal: 5,
    color: "#FFF",
    fontSize: 12,
  }
})