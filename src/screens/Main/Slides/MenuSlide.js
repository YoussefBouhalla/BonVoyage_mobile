import { StyleSheet, Text, View, Dimensions} from 'react-native'
import React from 'react'
import ProfileCard from '../../../features/UI/ProfileCard';

const {width, height} = Dimensions.get('window');

export default function MenuSlide() {
  return (
    <View style={{flex: 1, width}}>
        <ProfileCard />
        <Text style={{marginHorizontal: 15, marginVertical: 10,fontFamily: 'Poppins-Bold', fontSize: 18 }}>Pages</Text>
    </View>
  )
}

const styles = StyleSheet.create({})