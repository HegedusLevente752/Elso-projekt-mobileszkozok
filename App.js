

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import CurrentWeather from './src/components/currentweather/currentweather';
import UpcomingWeather from './src/components/upcomming weather/upcommingweather';
import City from './src/components/city/city';  
export default function App() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.wrapper}>
            <UpcomingWeather />
           
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },

});