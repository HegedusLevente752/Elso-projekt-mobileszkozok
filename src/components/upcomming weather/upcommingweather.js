
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

const Data=[  
    {
    dt_txt: "2026-02-15 18:00:00",
      main: {
        "temp_min": 10.1,
        "temp_max": 1.96
      },
      "weather": [
        {
          "main": "Clouds"
        }
      ]
    },
    {
      dt_txt: "2026-02-15 19:00:00",
      main: {
        "temp_min": 19.1,
        "temp_max": 2.96
      },
      "weather": [
        {
          "main": "Cloudsy"
        }
      ]
    },
    {
      dt_txt: "2026-02-15 20:00:00",
      main: {
        "temp_min": 190.1,
        "temp_max": 26
      },
      "weather": [
        {
          "main": "Cloudsy"
        }
      ]
    }
    ]
const Item = (props)=>{   
    const {dt_txt, min, max, condition} = props
    return(
        <View>
           <AntDesign name="sun" size={25} color="black"/>
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>    
             
        </View>
    )
}

export default function CurrentWeather() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.upcoming}>Upcoming weather</Text>
        <FlatList 
        data={Data}
        renderItem={({item}) => <Item dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} condition={item.weather[0].main} />}
        keyExtractor={item => item.dt_txt}
      />

    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
   upcoming: {
    paddingTop: 100,
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
   item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


