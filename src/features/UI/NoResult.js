import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import UnhappyResultIcon from '../../assets/icons/unhappyResult.svg'

export default function NoResult() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <UnhappyResultIcon height={60} width={60} />
        <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 18}}>No Result</Text>
    </View>
  )
}

const styles = StyleSheet.create({})