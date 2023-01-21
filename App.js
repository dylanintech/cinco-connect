import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';
import Gallery from './gallery';
import Absences from './absences';
import ClassInfo from './classinfo';
import About from './about';
import Terms from './terms';

const Stack = createNativeStackNavigator();

export default function App() {
  // const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        <Stack.Screen name="gallery" component={Gallery} options={{ headerShown: false}}/>
        <Stack.Screen name="absences" component={Absences} options={{ headerShown: false}}/>
        <Stack.Screen name="classinfo" component={ClassInfo} options={{ headerShown: false}}/>
        <Stack.Screen name="about" component={About} options={{ headerShown: false}}/>
        <Stack.Screen name="terms" component={Terms} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerContainer: {
//     width: '100%',
//     padding: 20,
//     backgroundColor: 'white',
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//     // borderBottomWidth: 1,
//     // borderBottomColor: 'gray',
//     marginTop: 30,
//   },
//   headerText: {
//     fontSize: 25,
//     fontWeight: 'bold',
//   },
//   contentContainer: {
//     flex: 1,
//     width: '100%',
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   divContainer: {
//     flex: 1,
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   div: {
//     width: '100%',
//     padding: 20,
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 10,
//   },
//   divSecond: {
//     width: '100%',
//     padding: 20,
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 10,
//   },
//   divHeader: {
//     textShadowRadius: 1,
//     textShadowColor: 'black',
//     fontSize: 20,
//   },
//   listText: {
//     paddingBottom: 5,
//     paddingTop: 5,
//   },
//   monthHeader: {
//     fontSize: 15,
//     fontStyle: 'italic',
//     fontWeight: 'semi-bold',
//     paddingBottom: 7,
//     paddingTop: 7,
//   },
//   footerContainer: {
//     flex: 0,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 40,
//   },
//   footerText: {
//     padding: 10,
//   }
// });
