import { StyleSheet, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';


export default function ListItem({ dt_txt, min, max, condition }) {
  const {item, text, temp, con} = styles;
  return (
    <View style={item}>
      <Feather name="sun" size={25} color="black" />
      <Text style={text}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
      <Text style={con}>{condition}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'deepskyblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: 'black',
    gap: 8,
  },
  text: {
    color: 'black',
  },
  temp: {
    color: 'red',
    
  },
  con: {
    color: 'white',
  },
});