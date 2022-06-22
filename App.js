import { StyleSheet, Dimensions } from 'react-native';
import Navigation from "./src/navigation/Navigation";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './src/reducers';
import * as Font from 'expo-font';
import {useState, useEffect} from 'react'

const {width, height} = Dimensions.get('window');

const store = createStore(allReducers);

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(async () => {
    await Font.loadAsync({
      'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
      'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
      'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    });
    setFontLoaded(true);
  }, []);
  
  return (
    <>
      {
        fontLoaded ? (
          <Provider store={store}>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                  <StatusBar style="light" backgroundColor='#EB5353' translucent={false} />
                  <Navigation/>
                </SafeAreaView>
            </SafeAreaProvider>
          </Provider>
        ) : null
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: '#F8F4F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
