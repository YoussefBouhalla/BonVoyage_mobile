import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

export default function ViewAllTitle({title,marginTop , marginBottom, onPress}) {

  // --------------------
  // loading Poppins fonts
  // --------------------
  const [loaded] = useFonts({
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!loaded) {
      return null;
  }

  return (
    <View style={{display: 'flex', flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'space-between', alignItems: 'center', marginTop, marginBottom}}>
      <Text style={{fontFamily: 'Poppins-Bold', fontSize: 18 }}>{title}</Text>
      <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#EB5353' }} onPress={onPress} >View all</Text>
    </View>
  )
}

const styles = StyleSheet.create({})