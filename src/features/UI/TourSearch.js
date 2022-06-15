import { StyleSheet, Text, View, Dimensions,TextInput} from 'react-native'
import React, {useState} from 'react'
import { useFonts } from 'expo-font';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';

import SearchColoredIcon from '../../assets/icons/searchColored.svg';
import LocationColoredIcon from '../../assets/icons/locationColored.svg';

import { OurToursSearchAction } from '../../actions/ToursActions';

import SearchButton from './SearchButton';

const {width, height} = Dimensions.get('window');

export default function TourSearch({ handleBottomSheetClose }) {

    const [data, setData] = useState({})
    const ourToursSearch = useSelector(state => state.OurToursSearch)
    const dispatch = useDispatch();

    const cities = useSelector(state => state.cities);
    

    // --------------------
    // handling Search
    // --------------------
    const handleSearch = async () => {
        await dispatch(OurToursSearchAction({...ourToursSearch, ...data}))
        await handleBottomSheetClose(0)
    }

    // --------------------
    // loading Poppins fonts
    // --------------------
    const [loaded] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View>
            <View style={{...styles.center}}>
                <Text style={{...styles.title}}>Tour Search</Text>
                <Text style={{...styles.description}}>Search for your next destination !</Text>

                <View style={{...styles.searchBar}}>
                    <SearchColoredIcon height={20} width={20} />
                    <TextInput
                            onChangeText={(title) => setData({...data, title})}
                            style={styles.input}
                            placeholder="Tour name"
                    />                
                </View>

                <View style={{...styles.searchBar, marginBottom: 20}}>
                    <LocationColoredIcon height={20} width={20} />
                    <Picker
                        selectedValue={data.cityId}
                        style={{...styles.input, width: "96%"}}
                        onValueChange={(cityId, itemIndex) =>
                            setData({...data, cityId})
                        }
                    >
                        {
                            cities.map((city, index) => (
                                <Picker.Item key={index} label={city.cityname} value={city.cityId} />
                            ))
                        }
                    </Picker>              
                </View>

                <SearchButton content="Search" onPress={handleSearch} />
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
    },
    description : {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    center : {
        marginTop: 5,
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifycontent: 'center'
    },
    searchBar: {
        width: width- 30,
        height: 50,
        marginTop: 10,
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
      input: {
        height: '100%',
        width: '100%',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
        marginLeft: 10
      }
})