import { StyleSheet, FlatList, Text, View } from 'react-native';
import ListItem from '../../listitem/listitem';

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

export default function UpCommingWeather() {
    const renderItem=({item})=>(
        <ListItem 
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max} />
    )
  return (
    <View style={styles.container}> 
         <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.dt_txt}
        ItemSeparatorComponent={()=><View style={styles.separator}/>}
        ListEmptyComponent={()=><Text>No data available</Text>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  separator:{ 
    height: 1, 
    backgroundColor: 'black',
    margin: 5
  },
 container: {
   flex: 1,
   width: '100%'
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
  title: {
    fontSize: 32
  },
});