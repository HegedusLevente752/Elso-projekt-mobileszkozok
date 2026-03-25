import { ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import UpcomingWeather from './src/components/screen/upcomming weather/upcommingweather';
import City from './src/components/screen/city/city';

export default function App() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.wrapper}>
          <ImageBackground source={require('./pics/pic2.jpg')} style={styles.background}>
            <View style={styles.container}>
              <View style={styles.leftPanel}>
                <City />
              </View>
              <View style={styles.rightPanel}>
           
              </View>
            </View>
          </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  leftPanel: {
    flex: 1,
    justifyContent: 'center',
  },
  rightPanel: {
    flex: 1,
  },
});