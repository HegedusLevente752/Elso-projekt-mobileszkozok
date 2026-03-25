
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CurrentWeather() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.wrapper}>
        <Text style={styles.city}>Weather in different cities</Text>
        <Text style={styles.cityupcoming}>Subotica - 12°</Text>
        <Text style={styles.cityupcoming}>Belgrade - 15°</Text>
        <Text style={styles.cityupcoming}>Budapest - 10°</Text>

    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    city: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    cityupcoming: {
        fontSize: 20,
        color: 'yellow',
        textAlign: 'center'
    }   
});


