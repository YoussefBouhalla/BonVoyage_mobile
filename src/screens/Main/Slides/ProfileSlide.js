import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable} from 'react-native'
import React , {useRef, useState, useCallback} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import BottomSheet,{ BottomSheetView } from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux'

import CrownIcon from '../../../assets/icons/crown.svg'
import ProfileActions from '../../../features/UI/ProfileActions';
import Navbar from '../../../features/ProfileNavigation/Navbar';

import ProfileFavorite from '../../../features/ProfileFavoriteTours/Container'
import ProfileStays from '../../../features/ProfileDashboardStays/Container'
import ProfileReservations from '../../../features/ProfileReservations/Container'
import TourSearch from '../../../features/UI/TourSearch';


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

        <View style={{...styles.card}}>
          <LinearGradient colors={['#00000024', '#000000ac']} style={styles.cover_gradient}></LinearGradient>
          <ImageBackground source={{uri: `https://scontent.fcmn1-2.fna.fbcdn.net/v/t1.6435-9/49119891_575649722897523_6474445259194499072_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=KJZfGTDNWhoAX_Tbln9&_nc_ht=scontent.fcmn1-2.fna&oh=00_AT_Iy0iVLc_V7EOxFHjSSQ3euMlOvzxTIUSkUEOBK0tG0Q&oe=62CE2643` }} style={styles.card_image} />

          <View style={{...styles.icon, marginBottom: 10}}>
            <ImageBackground source={{uri: `https://scontent.fcmn1-1.fna.fbcdn.net/v/t1.6435-9/189291492_1192288864566936_3467608870586354046_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZU99pusxuXcAX9q64a0&tn=3SSixveo5-B0na2e&_nc_ht=scontent.fcmn1-1.fna&oh=00_AT_GvsSlHS_ZAvLi41ingNPB98hWg0vc8ALx4WzCyASxAg&oe=62CDCA7A` }} style={styles.card_image} />
          </View>


          <View style={{display: 'flex', flexDirection: 'column',marginLeft: 10, justifyContent: 'center', alignItems: "center", marginBottom: 10 }}>
            <Text style={{...styles.username}}>Youssef Bouhalla</Text>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <CrownIcon height={15} width={15} />
              <Text style={{...styles.role, marginTop: 3}}>Premium owner</Text>
            </View>
          </View>
        </View>

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
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 250,
    backgroundColor: "#fff",
    overflow: 'hidden',
    shadowColor: "#a1a0a0",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity:  0.17,
    shadowRadius: 2.54,
    elevation: 3,
    borderColor: "#a9a9a95e",
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  cover_gradient : {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    width:"100%",
    height: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  card_image: {
    position: 'absolute',
    zIndex: -1,
    height: "100%",
    width: "100%"
  },
  icon :{
    width: 100,
    height: 100,
    borderRadius: 999,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: "#FFF"
  },
  username : {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold"
  },
  role :{
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    marginLeft: 5
  },
  sheet_background : {
    width,
    height,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: "#0707078d"
  }
})