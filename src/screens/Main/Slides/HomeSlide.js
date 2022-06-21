import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import ProfileCard from '../../../features/UI/ProfileCard'
import ViewAllTitle from '../../../features/UI/ViewAllTitle';
import Container from '../../../features/RecommendedTours/Container';
import GoPremium from '../../../features/UI/GoPremium';

const {width, height} = Dimensions.get('window');

export default function HomeSlide() {
  return (
    <View style={{flex: 1, width}}>
      <ProfileCard /> 
      <ScrollView  style={{...styles.scroll}} contentContainerStyle={{paddingBottom: 10}}>
        <ViewAllTitle title="Recommended Tours" marginBottom={10} marginTop={0} />
        <Container />
        <GoPremium />
        <ViewAllTitle title="Recommended Stays" marginBottom={10} marginTop={10} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scroll :{
    flexGrow: 0,
    height: height - 141,
    marginTop: 10
  }
})