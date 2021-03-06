import { StyleSheet, Pressable } from 'react-native'
import React from 'react'

import HomeIcon from '../../assets/icons/home.svg'
import MapIcon from '../../assets/icons/map.svg'
import ProfileIcon from '../../assets/icons/profile.svg'
import DashboardIcon from '../../assets/icons/dashboard.svg'
import BarsIcon from '../../assets/icons/bars.svg'

export default function NavItem({index,currentSlideIndex, goToSlide, setCurrentSlideIndex}) {

  const changeNavigation = (index) => {
    return () => {
        goToSlide(index);
        setCurrentSlideIndex(index)
    }
  }

  return (
    <Pressable onPress={changeNavigation(index)} style={{...styles.content ,flex: 1,borderColor: "#EB5353", borderBottomWidth: currentSlideIndex === index ? 4 : 0 , backgroundColor: currentSlideIndex === index ? '#a9a9a911' : 'transparent'}}>
      {index === 0 && <HomeIcon height={23} />}
      {index === 1 && <MapIcon height={23} width={23} />}
      {index === 2 && <ProfileIcon height={23} width={23} />}
      {index === 3 && <DashboardIcon height={23} width={23} />}
      {index === 4 && <BarsIcon height={23} width={23} />}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  content : {
    display: 'flex' , 
    justifyContent: 'center',
    alignItems: 'center'
  }
})