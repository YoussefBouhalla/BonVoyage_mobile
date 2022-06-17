import { StyleSheet,  View, Dimensions, Pressable} from 'react-native'
import React , {useRef, useState, useCallback} from 'react'
import { useFonts } from 'expo-font';
import BottomSheet,{ BottomSheetView } from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux'

import ProfileActions from '../../../features/UI/ProfileActions';
import Navbar from '../../../features/ProfileNavigation/Navbar';

import ProfileFavorite from '../../../features/ProfileFavoriteTours/Container'
import ProfileStays from '../../../features/ProfileDashboardStays/Container'
import ProfileReservations from '../../../features/ProfileReservations/Container'
import TourSearch from '../../../features/UI/TourSearch';
import ProfileHeader from '../../../features/UI/ProfileHeader';


const {width, height} = Dimensions.get('window');

export default function ProfileSlide() {

  const [currentIndex, setCurrentIndex] = useState(0)


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
    'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
  });

  if (!loaded) {
      return null;
  }

  return (
    <>
      <View style={{flex: 1, width}}>

        <ProfileHeader />

        <ProfileActions />

        <Navbar setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />

        {
          currentIndex === 0 && <ProfileFavorite handleBottomSheet={handleBottomSheet} />
        }
        {
          currentIndex === 1 && <ProfileReservations />
        }
        {
          currentIndex === 2 && <ProfileStays />
        }

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