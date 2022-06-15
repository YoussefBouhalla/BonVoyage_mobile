import { StyleSheet, Text, View, Dimensions, Pressable} from 'react-native'
import React, {useRef, useState, useEffect, useCallback} from 'react'
import { useFonts } from 'expo-font';
import BottomSheet,{ BottomSheetView } from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux'


import SearchBar from '../../../features/UI/SearchBar';
import FilterBar from '../../../features/UI/OurToursFilterBar';
import Tours from '../../../features/OurTours/ScrollContainer';
import TourSearch from '../../../features/UI/TourSearch';
import { searchForTours } from '../../../services/ToursServices';


const {width, height} = Dimensions.get('window');

export default function ToursSlide() {

  // --------------------
  // Tours related
  // --------------------

  const ourToursSearch = useSelector(state => state.OurToursSearch)
  const [tours, setTours] = useState([])

  useEffect(() => {
    searchForTours(ourToursSearch).then(res => {
      setTours(res.data)
    })
  }, [ourToursSearch])
  
  // --------------------
  // Bottom Sheet State and Ref
  // --------------------
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const sheetRef = useRef(null);

  // --------------------
  // Bottom Sheet methods
  // --------------------
  const handleBottomSheet = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsBottomSheetOpen(true);
  }, [])

  const handleBottomSheetClose = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsBottomSheetOpen(false);
  }, [])

  // --------------------
  // loading Poppins fonts
  // --------------------
  const [loaded] = useFonts({
    'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!loaded) {
      return null;
  }

  return (
    <>
      <View style={{flex: 1, width}}>

        <Text style={{margin: 15,fontFamily: 'Poppins-Bold', fontSize: 18 }}>Our Tours</Text>
        
        <SearchBar handleBottomSheet={handleBottomSheet} />

        <FilterBar />

        <Tours tours={tours} />

      </View>

      {/* Search Bottom Sheet */}

      { isBottomSheetOpen &&
        <Pressable style={styles.sheet_background} onPress={() => handleBottomSheetClose(0)}>
        
        </Pressable>
      }

      <BottomSheet
        ref={sheetRef}
        snapPoints={[ 1 , 300  ]}
        enablePanDownToClose
        onClose={() => setIsBottomSheetOpen(false) }
      >
        <BottomSheetView>
            <TourSearch handleBottomSheetClose={handleBottomSheetClose} />
        </BottomSheetView>
      </BottomSheet>
    </>
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