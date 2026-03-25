
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
 
export default function Child1(props) {
  const {message, color} = props;

  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.wrapper}>
           <View style={[styles.container, { backgroundColor: color }]}>
              <Text>{message}</Text>
           </View>
           
        </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },

});