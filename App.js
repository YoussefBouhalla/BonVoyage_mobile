import { StyleSheet, Dimensions } from 'react-native';
import Navigation from "./src/navigation/Navigation";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" backgroundColor='#EB5353' translucent={false} />
        <Navigation/>
      </SafeAreaView>
    </SafeAreaProvider>
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
