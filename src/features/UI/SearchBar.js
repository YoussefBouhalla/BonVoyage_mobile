import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import {useDispatch} from 'react-redux';

import SearchColoredIcon from '../../assets/icons/searchColored.svg';
import DeleteIcon from '../../assets/icons/delete.svg';

import { OurToursSearchAction } from '../../actions/ToursActions';


export default function SearchBar({ handleBottomSheet }) {

  const dispatch = useDispatch()

  const clearSearch = () => {
    dispatch(OurToursSearchAction({}))
  }

  return (
    <View style={{display: 'flex', flexDirection: 'row', marginHorizontal: 15}} >
      <Pressable style={{...styles.searchBar}} onPress={() => handleBottomSheet(1)}>
        <SearchColoredIcon height={20} width={20} />
        <Text style={{fontFamily: 'Poppins-Medium', marginLeft: 7, fontSize: 12}}>Search for a tour ...</Text>
      </Pressable>
      <Pressable style={{...styles.clear}} onPress={clearSearch}>
        <DeleteIcon height={15} width={15}/>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: "#FFF", fontSize: 12, marginLeft: 5}}>Clear Search</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    flex:1,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    borderColor: "#a9a9a95e",
    backgroundColor: '#FFF',
    borderStyle: "solid",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: "#a1a0a0",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity:  0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  clear: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    backgroundColor: "#EB5353",
    marginLeft: 10,
    borderRadius: 6
  }
})