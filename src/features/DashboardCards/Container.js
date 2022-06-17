import { StyleSheet, Text, ScrollView, View,  Dimensions, FlatList } from 'react-native'
import React from 'react'
import Card from './Card';
import CardsSection from './CardsSection';

import StayWhiteIcon from '../../assets/icons/stayWhite.svg';
import StarFilledWhiteIcon from '../../assets/icons/starFilledWhite.svg';
import WatchIcon from '../../assets/icons/watch.svg';

const {width, height} = Dimensions.get('window');



export default function ScrollContainer() {
  return (
    <View style={{marginVertical: 10}}>
        <CardsSection 
            marginTop={0} 
            content={[
                {title: "Total Reservations", number: 9, Icon: WatchIcon },
                {title: "Number of Stays", number: 2, Icon: StayWhiteIcon},
            ]} 
        />
        <CardsSection 
            marginTop={10} 
            content={[
                {title: "Reserved now", number: 2, Icon: StayWhiteIcon},
                {title: "Rating", number: 4.3, Icon: StarFilledWhiteIcon},
            ]} 
        />
    </View>
  )
}

const styles = StyleSheet.create({
    scroll :{
        
    }
})