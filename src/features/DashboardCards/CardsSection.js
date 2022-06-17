import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Card from './Card';

const {width, height} = Dimensions.get('window');

export default function CardsSection({marginTop, content}) {
  return (
    <View style={{...styles.section, marginTop}}>
        <Card marginLeft={15} marginRight={0} title={content[0].title} number={content[0].number} Icon={content[0].Icon} />
        <Card marginLeft={10} marginRight={15} title={content[1].title} number={content[1].number} Icon={content[1].Icon} />
    </View>
  )
}

const styles = StyleSheet.create({
    section: {
        display: 'flex',
        flexDirection: 'row',
        width,
    }
})