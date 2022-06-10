import { StyleSheet, View } from 'react-native';
import Navigation from "./src/navigation/Navigation";



export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
