import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native'
import React, {useEffect, useState} from 'react'
import {LinearGradient} from 'expo-linear-gradient';

import LocationIcon from '../../assets/icons/location.svg'
import StarFilledIcon from '../../assets/icons/starFilled.svg'
import StarUnfilledYellowIcon from '../../assets/icons/starUnfilledYellow.svg'

import { getCity } from '../../services/CitiesServices';


export default function Card({index, length, tour}) {

  const [city, setCity] = useState("")

  useEffect(() => {
    getCity(tour.cityId).then(res => {
      setCity(res.data.cityname)
    })
  }, [])


  return (
    <Pressable style={{...styles.card, marginTop: index === 0 ? 0 : 10, marginBot: index === length ? 10 : 0}}>
      <LinearGradient colors={['#00000024', '#000000ac']} style={styles.cover_gradient}></LinearGradient>
      <ImageBackground source={{uri: `http://192.168.137.1:3000/tours/${tour.tourId}/image` }} style={styles.card_image} />

      <Text style={{...styles.title}}>{tour.title}</Text>

      <Text style={{...styles.description}}>{tour.description}</Text>

      <View style={{...styles.location}}>
        <LocationIcon height={15} width={15}/>
        <Text style={{...styles.city}}>{city}</Text>
      </View>

      <View style={{...styles.rating}}>
        {
          Array.from(Array(parseInt(tour.rating)) , (e, index) => (
            <StarFilledIcon height={15} width={15} key={index} />
          ))
        }
        {
          Array.from(Array(5 - parseInt(tour.rating)) , (e, index) => (
            <StarUnfilledYellowIcon height={15} width={15} key={index} />
          ))
        }
        
        <Text style={{...styles.rate}}>{tour.rating}.0</Text>
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
  description : {
    marginHorizontal: 5,
    width: "75%",
    color: "#FFF",
    fontSize: 12,
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
    width: "75%",
    color: "#FFF",
    fontSize: 12,
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
    width: "75%",
    color: "#FFF",
    fontSize: 12,
  }
})