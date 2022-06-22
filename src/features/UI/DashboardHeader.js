import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react'

import CrownIcon from '../../assets/icons/crown.svg'
import ScrollContainer from '../DashboardCards/Container';

export default function DashboardHeader() {

    return (
        <View style={{...styles.card}}>
            <LinearGradient colors={['#00000080', '#00000080']} style={styles.cover_gradient}></LinearGradient>
            <ImageBackground source={{uri: `https://scontent.fcmn1-2.fna.fbcdn.net/v/t1.6435-9/49119891_575649722897523_6474445259194499072_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=KJZfGTDNWhoAX_Tbln9&_nc_ht=scontent.fcmn1-2.fna&oh=00_AT_Iy0iVLc_V7EOxFHjSSQ3euMlOvzxTIUSkUEOBK0tG0Q&oe=62CE2643` }} style={styles.card_image} />

            <Text style={{marginHorizontal: 15,marginTop: 15, marginBottom: 5,fontFamily: 'Poppins-Bold', fontSize: 18, color: "#FFF" }}>Dashboard</Text>

            <View style={{display: 'flex', flexDirection: 'row', marginHorizontal: 15 }}>
                <View style={{position: 'relative'}}>
                    <View style={{...styles.icon}}>
                        <ImageBackground source={{uri: `https://scontent.fcmn1-1.fna.fbcdn.net/v/t1.6435-9/189291492_1192288864566936_3467608870586354046_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZU99pusxuXcAX9q64a0&tn=3SSixveo5-B0na2e&_nc_ht=scontent.fcmn1-1.fna&oh=00_AT_GvsSlHS_ZAvLi41ingNPB98hWg0vc8ALx4WzCyASxAg&oe=62CDCA7A` }} style={styles.card_image} />
                    </View>

                    <View style={{...styles.online}}>

                    </View>
                </View>

                <View style={{display: 'flex', flexDirection: 'column',marginLeft: 10, justifyContent: 'center' }}>
                    <Text style={{...styles.username}}>Youssef Bouhalla</Text>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <CrownIcon height={11} width={11} />
                        <Text style={{...styles.role}}>Premium owner</Text>
                    </View>
                </View>
            </View>

            <View style={{display: 'flex', flexDirection: 'row', marginHorizontal: 15, marginTop: 10, justifyContent: 'space-between' }}>
                <View>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, color: "#FFF" }}>Premium ends in</Text>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, color: "#FFF" }}>26 days</Text>
                </View>
                <Pressable style={{...styles.renew}}>
                    <CrownIcon height={15} width={15}/>
                    <Text style={{fontFamily: 'Poppins-SemiBold', color: "#EB5353", fontSize: 12, marginLeft: 5}}>Renew Premium</Text>
                </Pressable>
            </View>

            <ScrollContainer />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
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
    icon :{
        width: 60,
        height: 60,
        borderRadius: 999,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: "#FFF"
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
    username : {
        color: "#FFF",
        fontSize: 14,
        fontFamily: "Poppins-SemiBold"
    },
    role :{
        color: "#FFF",
        fontSize: 12,
        fontFamily: "Poppins-Medium",
        marginLeft: 5
    },
    online: {
        position: 'absolute',
        top: 45,
        left: 45,
        zIndex: 2,
        backgroundColor: "#1CA70C",
        height: 12,
        width: 12,
        borderRadius: 999,
        borderWidth: 2,
        borderColor: "#FFF",
        
    },
    renew :{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 50,
        backgroundColor: "#FFF",
        marginLeft: 10,
        borderRadius: 6
    }
})