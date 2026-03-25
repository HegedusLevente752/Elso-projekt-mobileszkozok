
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CurrentWeather() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.wrapper}>
    <View style={styles.container}>
        <StatusBar style="auto" />
        <AntDesign name="sun" size={50} color="black" />
        <Text>Current weather </Text>
         <Text style={styles.temp}>6</Text>
         <Text style={styles.feels}>Feels like 6 </Text>
         <View style={styles.HiLoWrapper}>
            <Text style={styles.HiLo}>High: 18 </Text>
            <Text style={styles.HiLo}>Min: 2 </Text>
         </View>
      </View>
        <View style={styles.bodyWrapper}>
            <Text style={styles.description}>Its sunny</Text>
            <Text style={styles.message}>Its perfect t-shirt weather</Text>
        </View>
      
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#3f7fc4',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  HiLo: {
    color: 'black',
    fontSize: 20,
  },
  HiLoWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginBottom: 40,
    paddingLeft: 25,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});


