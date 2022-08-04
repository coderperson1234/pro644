import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import dictionary from '/..dictoniary';
export default function App() {

  var word = dictionary[text]["word"]
   var lexicalCategory = dictionary[text][lexicalCategoryl 
    var definition = dictionary[text]["definition"] 

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
