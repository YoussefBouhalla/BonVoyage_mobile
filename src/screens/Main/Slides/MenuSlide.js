import { StyleSheet, Text, View, Dimensions} from 'react-native'
import React, {useState} from 'react'
import ProfileCard from '../../../features/UI/ProfileCard';
import List from '../../../features/MenuList/List';
import * as SecureStore from 'expo-secure-store'


import HomeIcon from '../../../assets/icons/home.svg'
import StaysIcon from '../../../assets/icons/stays.svg'
import MapIcon from '../../../assets/icons/map.svg'
import DashboardIcon from '../../../assets/icons/dashboard.svg'
import CrownIcon from '../../../assets/icons/crown.svg'
import PolicyIcon from '../../../assets/icons/policy.svg'
import EditBlackIcon from '../../../assets/icons/editBlack.svg'
import LogoutIcon from '../../../assets/icons/logout.svg'

const {width, height} = Dimensions.get('window');

export default function MenuSlide({navigation, goToSlide, setCurrentSlideIndex}) {

  // ----------------
  // Change Navigation
  // ----------------
  const changeNavigation = (index) => {
    return () => {
        goToSlide(index);
        setCurrentSlideIndex(index)
    }
  }
  
  // ----------------
  // Pages
  // ----------------
  const handleStaysPress = () => {

  }

  const [pages, setPages] = useState(
    [
      {title: 'Home' , Icon: HomeIcon, onPress: changeNavigation(0)},
      {title: 'Stays' , Icon: StaysIcon, onPress: handleStaysPress},
      {title: 'Tours' , Icon: MapIcon, onPress: changeNavigation(1)},
      {title: 'Premium Dashboard' , Icon: DashboardIcon, onPress: changeNavigation(3)}
    ]
  )

  // ----------------
  // Menus
  // ----------------
  const handleRenewPress = () => {

  }

  const handleEditPress = () => {

  }

  const handlePrivacyPress = () => {

  }

  const handleLogoutPress = async () => {
    await SecureStore.deleteItemAsync("token")
    await navigation.navigate("Login")
  }

  const [menus, setMenus] = useState(
    [
      {title: 'Renew Premium' , Icon: CrownIcon, onPress: handleRenewPress},
      {title: 'Edit Profile' , Icon: EditBlackIcon, onPress: handleEditPress},
      {title: 'Privacy and policy' , Icon: PolicyIcon, onPress: handlePrivacyPress},
      {title: 'Sign Out' , Icon: LogoutIcon, onPress: handleLogoutPress}
    ]
  )


  return (
    <View style={{flex: 1, width}}>
        <ProfileCard onPress={changeNavigation(2)} />
        <Text style={{marginHorizontal: 15, marginVertical: 10,fontFamily: 'Poppins-Bold', fontSize: 18 }}>Pages</Text> 
        <List list={pages} changeNavigation={changeNavigation}  />
        <Text style={{marginHorizontal: 15, marginVertical: 10,fontFamily: 'Poppins-Bold', fontSize: 18 }}>Menu</Text> 
        <List list={menus} />
    </View>
  )
}

const styles = StyleSheet.create({})