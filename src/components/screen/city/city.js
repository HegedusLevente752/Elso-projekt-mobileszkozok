
import { StyleSheet, Text, View } from 'react-native';
import AntDesing from '@expo/vector-icons/AntDesign';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function City() {
  return (
    <SafeAreaProvider>
    <View style={styles.header}>
        <Text style={styles.city}>Szabadka</Text>
        <Text style={styles.voj}>Vajdasag</Text>
        <Text style={styles.population}>100.000</Text>
        <AntDesing name="user" size={50} color="white" style={styles.userIcon} />

    </View>
    <View style={styles.container}>
    
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    header: {
       
        padding: 2,
    },
    userIcon: {
        position: 'absolute',
        top: 75,
        right: 225,
        color: 'yellow',
    },
    container: {
        flex: 1,
        
        //justifyContent: 'center',
    },
    city: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    cityupcoming: {
        marginTop: 5,
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginBottom: 2
    },
    voj: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20
    },
    population: {
        fontSize: 20,
        color: 'yellow',
        textAlign: 'center',
        marginBottom: 10
    }

});


