import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import FilterIcon from '../../assets/icons/filter.svg'

import { OurToursSearchAction } from '../../actions/ToursActions';

const {width, height} = Dimensions.get('window');

export default function ReservationFilterBar() {

  const ourToursSearch = useSelector(state => state.OurToursSearch)

  const dispatch = useDispatch()
  
  const setType = (type) => {
    return () => {
      dispatch(OurToursSearchAction({...ourToursSearch, type}))
    }
  }


  return (
    <View style={{ ...styles.content}}>
      <Pressable style={{backgroundColor: "#EB5353", width: 50, height: 50, borderRadius: 6, ...styles.center}}>
        <FilterIcon width={20} height={20} />
      </Pressable>

      <Pressable onPress={setType("beach")} style={{backgroundColor: ourToursSearch.type === "beach" ? "#EB5353" : "#DBDBDB" , flex: 1, ...styles.center, height: 50, borderRadius: 6, marginLeft: 10}}>
        <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 12, color: ourToursSearch.type === "beach" ? "#FFF" : "#000"}}>Accepted</Text>
      </Pressable>

      <Pressable onPress={setType("natural")} style={{backgroundColor: ourToursSearch.type === "natural" ? "#EB5353" : "#DBDBDB" , flex: 1, ...styles.center, height: 50, borderRadius: 6, marginLeft: 10}}>
        <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 12, color: ourToursSearch.type === "natural" ? "#FFF" : "#000"}}>On Hold</Text>
      </Pressable>

      <Pressable onPress={setType("historical")} style={{backgroundColor: ourToursSearch.type === "historical" ? "#EB5353" : "#DBDBDB" , flex: 1, ...styles.center, height: 50, borderRadius: 6, marginLeft: 10}}>
        <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 12,color: ourToursSearch.type === "historical" ? "#FFF" : "#000"}}>Refused</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    marginVertical: 10,
    marginHorizontal: 15
  },
  center : {
    display: 'flex' ,
    alignItems: 'center',
    justifyContent: 'center'
  }
})