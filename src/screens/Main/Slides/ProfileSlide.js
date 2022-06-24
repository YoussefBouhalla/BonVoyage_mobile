import { StyleSheet,  View, Dimensions } from 'react-native'
import React , { useState } from 'react'


import ProfileActions from '../../../features/UI/ProfileActions';
import Navbar from '../../../features/ProfileNavigation/Navbar';

import ProfileFavorite from '../../../features/ProfileFavoriteTours/Container'
import ProfileStays from '../../../features/ProfileDashboardStays/Container'
import ProfileReservations from '../../../features/ProfileReservations/Container'
import ProfileHeader from '../../../features/UI/ProfileHeader';


const {width, height} = Dimensions.get('window');

export default function ProfileSlide() {

  const [currentIndex, setCurrentIndex] = useState(0)


  return (
    <View style={{flex: 1, width}}>

      <ProfileHeader />

      <ProfileActions />

      <Navbar setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />

      {
        currentIndex === 0 && <ProfileFavorite />
      }
      {
        currentIndex === 1 && <ProfileReservations />
      }
      {
        currentIndex === 2 && <ProfileStays />
      }

    </View>
  )
}

const styles = StyleSheet.create({
  
  sheet_background : {
    width,
    height,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: "#0707078d"
  }
})