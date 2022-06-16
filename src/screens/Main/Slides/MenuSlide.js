import { StyleSheet, Text, View, Dimensions} from 'react-native'
import React, {useState} from 'react'
import ProfileCard from '../../../features/UI/ProfileCard';
import List from '../../../features/MenuList/List';

import HomeIcon from '../../../assets/icons/home.svg'
import StaysIcon from '../../../assets/icons/stays.svg'
import MapIcon from '../../../assets/icons/map.svg'
import DashboardIcon from '../../../assets/icons/dashboard.svg'
import CrownIcon from '../../../assets/icons/crown.svg'
import PolicyIcon from '../../../assets/icons/policy.svg'
import EditBlackIcon from '../../../assets/icons/editBlack.svg'
import LogoutIcon from '../../../assets/icons/logout.svg'

const {width, height} = Dimensions.get('window');

export default function MenuSlide() {

  // ----------------
  // Pages
  // ----------------
  const handleHomePress = () => {

  }

  const handleStaysPress = () => {

  }

  const handleToursPress = () => {

  }

  const handlePremiumPress = () => {

  }

  const [pages, setPages] = useState(
    [
      {title: 'Home' , Icon: HomeIcon, onPress: handleHomePress},
      {title: 'Stays' , Icon: StaysIcon, onPress: handleStaysPress},
      {title: 'Tours' , Icon: MapIcon, onPress: handleToursPress},
      {title: 'Premium Dashboard' , Icon: DashboardIcon, onPress: handlePremiumPress}
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

  const handleLogoutPress = () => {

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
        <ProfileCard />
        <Text style={{marginHorizontal: 15, marginVertical: 10,fontFamily: 'Poppins-Bold', fontSize: 18 }}>Pages</Text> 
        <List list={pages} />
        <Text style={{marginHorizontal: 15, marginVertical: 10,fontFamily: 'Poppins-Bold', fontSize: 18 }}>Menu</Text> 
        <List list={menus} />
    </View>
  )
}

const styles = StyleSheet.create({})