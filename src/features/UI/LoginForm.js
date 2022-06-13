import { StyleSheet, TextInput,  View, Dimensions, Text } from 'react-native'
import React , {useState} from 'react'
import { Formik } from 'formik';
import * as SecureStore from 'expo-secure-store'
import { useFonts } from 'expo-font';

import EmailIcon from '../../assets/icons/email.svg'
import KeyHoleIcon from '../../assets/icons/keyhole.svg'

import AuthButton from './AuthButton';
import { Login } from '../../services/AuthServices';

const {width, height} = Dimensions.get('window');

export default function LoginForm({ navigation }) {

    const [dataErrors, setDataErrors] = useState({})

    const handleLogin = async (values) => {

        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(!values.email.match(emailRegex)) {
          setDataErrors({ email: "invalid email format."})
        }else if (values.password.length === 0) {
            setDataErrors({ password: "please enter your password."})
        }else {
            await setDataErrors({})
            Login(values).then(res => {
                (async () => {
                    if (res.data.error.email) {
                        setDataErrors({ email: "email not found."})
                    }else if (res.data.error.password) {
                        setDataErrors({ password: "password is incorrect."})
                    }else{
                        await SecureStore.setItemAsync('token' , res.data.accessToken )
                        navigation.navigate('Main')
                    }
                })()
            });
        }
    }

    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleLogin}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
                <View style={{width, display: 'flex' , flexDirection: 'column',marginTop: 30}}>

                    <View style={{...styles.input_holder , marginTop: 15,  borderColor: dataErrors.email? "#EB5353" : "#a9a9a95e"}}>
                        <View style={{padding: 5, backgroundColor: '#a9a9a95e' , borderRadius: 999 }}>
                            <EmailIcon />
                        </View>
                        <TextInput
                            value={values.email} 
                            style={styles.input}
                            onBlur={handleBlur('email')}
                            onChangeText={handleChange('email')}
                            placeholder="Email"
                        />
                    </View>

                    <View style={{...styles.input_holder , marginTop: 15,  borderColor: dataErrors.password? "#EB5353" : "#a9a9a95e"}}>
                        <View style={{padding: 5, backgroundColor: '#a9a9a95e' , borderRadius: 999 }}>
                            <KeyHoleIcon />
                        </View>
                        <TextInput
                            value={values.password} 
                            style={styles.input}
                            onBlur={handleBlur('password')}
                            onChangeText={handleChange('password')}
                            placeholder="Password"
                            secureTextEntry={true}
                        />
                    </View>

                </View>

                <View style={{width}}>
                    <Text style={{marginVertical: 15, marginLeft: 15, color: "#EB5353", fontFamily: 'Poppins-Medium',textDecorationLine: 'underline', fontSize: 16}}>Forgot password?</Text>  
                </View>

                <AuthButton content="Login" onPress={handleSubmit} />
            </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    shadow : {
        shadowColor: "#a1a0a0",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3
      },
      input_holder: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        backgroundColor: '#F5F5F5',
        borderStyle: "solid",
        borderWidth: 0.5,
        borderRadius: 8,
        height: 60,
        padding: 10,
        alignItems: 'center',
        shadowColor: "#a1a0a0",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3,
        marginHorizontal: 15
      },
      input: {
        height: '100%',
        width: '100%',
        fontSize: 18,
        fontFamily: "Poppins-Medium",
        marginLeft: 10
      }
  })
