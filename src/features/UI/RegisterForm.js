import { StyleSheet, ScrollView, TextInput,  View } from 'react-native'
import React , {useState} from 'react'
import { Formik } from 'formik';

import EmailIcon from '../../assets/icons/email.svg'
import KeyHoleIcon from '../../assets/icons/keyhole.svg'
import UnlockIcon from '../../assets/icons/unlock.svg'
import FirstNameIcon from '../../assets/icons/firstname.svg'
import LastnameIcon from '../../assets/icons/lastname.svg'

import AuthButton from './AuthButton';
import { register } from '../../services/AuthServices';


export default function RegisterForm({ navigation }) {

    const [dataErrors, setDataErrors] = useState({})

    const handleRegister = async (values) => {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (values.firstname.length < 6 || values.firstname.length > 15) {
          setDataErrors({firstname: "first name must be between 6 and 15 characters."})
        }else if(values.lastname.length < 6 || values.lastname.length > 15) {
          setDataErrors({ lastname: "last name must be between 6 and 15 characters."})
        }else if(!values.email.match(emailRegex)) {
          setDataErrors({ email: "invalid email format."})
        }else if(values.password.length < 4 || values.password.length > 30) {
          setDataErrors({ password: "password must be between 4 and 30 characters."})
        }else if (values.password !== values.repeatpassword) {
          setDataErrors({ repeatpassword: "passwords are not identical."})
        }else {
            await setDataErrors({})    
            await register(values);
            await navigation.goBack();
        }
    }
    return (
        <Formik
            initialValues={{ firstname: '', lastname: '', email: '', password: '', repeatpassword: '', }}
            onSubmit={handleRegister}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
                <ScrollView style={{flexGrow: 0 , height: 250, marginVertical: 15 }}>
                    <View style={{...styles.input_holder , marginTop: 0,  borderColor: dataErrors.firstname? "#EB5353" : "#a9a9a95e"}}>
                        <View style={{padding: 5, backgroundColor: '#a9a9a95e' , borderRadius: 999 }}>
                            <FirstNameIcon />
                        </View>
                        <TextInput
                            value={values.firstname} 
                            style={styles.input}
                            onBlur={handleBlur('firstname')}
                            onChangeText={handleChange('firstname')}
                            placeholder="Firstname"
                        />
                    </View>

                    <View style={{...styles.input_holder , marginTop: 15,  borderColor: dataErrors.lastname? "#EB5353" : "#a9a9a95e"}}>
                        <View style={{padding: 5, backgroundColor: '#a9a9a95e' , borderRadius: 999 }}>
                            <LastnameIcon />
                        </View>
                        <TextInput
                            value={values.lastname} 
                            style={styles.input}
                            onBlur={handleBlur('lastname')}
                            onChangeText={handleChange('lastname')}
                            placeholder="Lastname"
                        />
                    </View>

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

                    <View style={{...styles.input_holder , marginTop: 15,  borderColor: dataErrors.repeatpassword? "#EB5353" : "#a9a9a95e"}}>
                        <View style={{padding: 5, backgroundColor: '#a9a9a95e' , borderRadius: 999 }}>
                            <UnlockIcon />
                        </View>
                        <TextInput
                            value={values.repeatpassword} 
                            style={styles.input}
                            onBlur={handleBlur('repeatpassword')}
                            onChangeText={handleChange('repeatpassword')}
                            placeholder="Repeat password"
                            secureTextEntry={true}
                        />
                    </View>
                </ScrollView>
            
                <AuthButton content="Register" onPress={handleSubmit} />
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
