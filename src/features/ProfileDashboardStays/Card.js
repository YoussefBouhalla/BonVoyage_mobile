import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native'
import React, {useEffect, useState} from 'react'
import {LinearGradient} from 'expo-linear-gradient';

import DeleteIcon from '../../assets/icons/delete.svg'
import LocationIcon from '../../assets/icons/location.svg'
import StarFilledIcon from '../../assets/icons/starFilled.svg'
import StarUnfilledYellowIcon from '../../assets/icons/starUnfilledYellow.svg'
import MapWhiteIcon from '../../assets/icons/mapWhite.svg'



import { getCity } from '../../services/CitiesServices';


export default function Card({index, length, tour}) {

  const [city, setCity] = useState("")

  useEffect(() => {
    getCity(7).then(res => {
      setCity(res.data.cityname)
    })
  }, [])
  

  return (
    <Pressable style={{...styles.card, marginTop: index === 0 ? 0 : 10, marginBot: index === length ? 10 : 0}}>
      <LinearGradient colors={['#00000024', '#000000ac']} style={styles.cover_gradient}></LinearGradient>
      <ImageBackground source={{uri: `https://scontent.fcmn1-2.fna.fbcdn.net/v/t1.6435-9/49119891_575649722897523_6474445259194499072_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=KJZfGTDNWhoAX_Tbln9&_nc_ht=scontent.fcmn1-2.fna&oh=00_AT_Iy0iVLc_V7EOxFHjSSQ3euMlOvzxTIUSkUEOBK0tG0Q&oe=62CE2643` }} style={styles.card_image} />

      <View style={{position: 'absolute', top: 8, left: 5, backgroundColor: "#EB5353", paddingHorizontal: 10, paddingVertical: 2, borderRadius: 999}}>
        <Text style={{...styles.status}}>Reserved now</Text>
      </View>

      <Pressable style={{display: 'flex' , flexDirection: 'row',alignItems: 'center', position: 'absolute', top: 8, right: 5, paddingHorizontal: 10, paddingVertical: 2, borderRadius: 999}}>
        <DeleteIcon height={25} width={25} />
      </Pressable>

      <Text style={{...styles.title}}>Traditional House</Text>

      <View style={{display: "flex" , flexDirection: 'row',alignItems: 'center'}}>
        <View style={{...styles.location}}>
          <LocationIcon height={15} width={15}/>
          <Text style={{...styles.city}}>{city}</Text>
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

      <View style={{...styles.tourlocation}}>
        <MapWhiteIcon height={15} width={15} color={'#FFF'} />
        <Text style={{...styles.tour}}>Akchour waterfalls</Text>
      </View>

    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
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
    fontSize: 18,
    fontFamily: "Poppins-SemiBold"
  },
  location: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5
    },
  city: {
    marginHorizontal: 5,
    color: "#FFF",
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold'
  },
  rating: {
    flex: 1,
    display: 'flex',
    paddingRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rate :{
    marginHorizontal: 5,
    color: "#FFF",
    fontSize: 12,
  },
  tourlocation :{
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginBottom: 10
  },
  tour: {
    marginHorizontal: 5,
    color: "#FFF",
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold'
  },
  status: {
    marginTop: 2,
    color: "#FFF",
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold'
  }
})