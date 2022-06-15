import { StyleSheet, Dimensions } from 'react-native';
import Navigation from "./src/navigation/Navigation";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './src/reducers';

const {width, height} = Dimensions.get('window');

const store = createStore(allReducers);

export default function App() {

  
  return (
    <Provider store={store}>
      <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <StatusBar style="light" backgroundColor='#EB5353' translucent={false} />
            <Navigation/>
          </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
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
