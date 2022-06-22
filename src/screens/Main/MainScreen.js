import { StyleSheet, View, Dimensions, FlatList, BackHandler, Alert } from 'react-native'
import React, {useEffect, useState, useRef} from 'react'
import * as Slides from './Slides'

import Navbar from '../../features/Navbar/Navbar'

const {width, height} = Dimensions.get('window');

const slides = [
  {
      id: 0,
      component: Slides.HomeSlide
  },
  {
      id:1,
      component: Slides.ToursSlide
  },
  {
      id:2,
      component: Slides.ProfileSlide
  },
  {
      id:3,
      component: Slides.DashboardSlide
  },
  {
      id:4,
      component: Slides.MenuSlide
  }
]

export default function MainScreen() {

  // --------------------
  // Slides State and Ref
  // --------------------
  const ref = useRef(null)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  // --------------------
  // Back button handler
  // --------------------
  const backAction = () => {
      Alert.alert("Discard changes?", "Are you sure you want to exit?", [
        {
          text: "NO",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
  };

  useEffect(() => {
      BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => {
          BackHandler.removeEventListener("hardwareBackPress", backAction);
      }   
  }, []);

  // --------------------
  // Slides Methods
  // --------------------
  const updatecurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);

  }

  const goToSlide = (offset) => {
      ref?.current?.scrollToOffset({offset: offset * width})
  }
  // --------------------

  return (
    <View style={styles.container}>
      <Navbar slides={slides} currentSlideIndex={currentSlideIndex} goToSlide={goToSlide} setCurrentSlideIndex={setCurrentSlideIndex} />
      <FlatList 
        ref={ref}
        onMomentumScrollEnd={updatecurrentSlideIndex}
        pagingEnabled
        data={slides}
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => ( <item.component goToSlide={goToSlide} setCurrentSlideIndex={setCurrentSlideIndex}/> )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: '#F8F4F1',
  }
})