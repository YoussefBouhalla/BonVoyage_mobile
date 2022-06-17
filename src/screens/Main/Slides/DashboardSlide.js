import { StyleSheet, Text, View, Dimensions} from 'react-native'
import React from 'react'
import DashboardHeader from '../../../features/UI/DashboardHeader';
import Container from '../../../features/ProfileDashboardStays/Container';

const {width, height} = Dimensions.get('window');

export default function DashboardSlide() {
  return (
    <View style={{flex: 1, width }}>
      <DashboardHeader />
      <Text style={{marginHorizontal: 15, marginTop: 10,fontFamily: 'Poppins-Bold', fontSize: 18 }}>My Stays</Text>
      <Container />
    </View>
  )
}

const styles = StyleSheet.create({})