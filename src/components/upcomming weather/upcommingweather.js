import { StatusBar } from 'expo-status-bar';
import { StyleSheet,FlatList, Text, View , Image} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';

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
    const {dt_txt, min, max, condition} =props
    return(
        <View style={styles.item}>
           <Feather name="sun" size={25} color="black"/>
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>            
        </View>
    )
}
export default function UpCommingWeather() {
    const renderItem=({item})=>(
        <Item 
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max} />
    )
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}> 
      <Image source={require('../../../pics/pic1.jpg')} style={styles.Image}/>
         <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.dt_txt}
        ItemSeparatorComponent={()=><View style={styles.separator}/>}
        ListEmptyComponent={()=><Text>No data available</Text>}/>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  separator:{ 
    height: 1, 
    backgroundColor: 'black',
    margin: 5
  },
 container: {
 // alignItems: 'center',
   backgroundColor: 'orange', 
   marginTop: StatusBar.currentHeight || 0,
   flex:1, 
   justifyContent:'center'
  },
  temp:{ 
      color:'black', 
      fontSize:48 },
  feels:{
    color:'black',
    fontSize:30
  },
  HiLo:{
      color:'black',
      fontSize:20
    },
  HiLoWrapper:{
      flexDirection:'row'
    },
  bodyWrapper:{
      backgroundColor: '#e1ef77'
      ,justifyContent: 'flex-end',
      alignItems: 'flex-start', 
      marginBottom: 40, 
      paddingLeft: 25
    },
  description:{
      fontSize:48
    },
  message:{
      fontSize:30
    },
  item: {
        backgroundColor: 'deepskyblue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderWidth:5,
        borderColor:'black'
  },
  title: {
    fontSize: 32
  },
  Image: {
    width: 100,
    height: 100
  }
});