import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Cinco Connect</Text>
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.divContainer}>
            <View style={styles.div}>
              <Text style={styles.divHeader}>Upcoming Events</Text>
              <View style={styles.divListContainer}>
                <Text style={styles.listText}>Girls Basketball vs JHS -- Tue Jan 24 5:00 p.m</Text>
                <Text style={styles.listText}>8th Grade Parent Night -- Wed Jan 25 All Day</Text>
                <Text style={styles.listText}>Girls Basketball @ PHS -- Fri Jan 27 5:00 p.m.</Text>
                <Text style={styles.listText}>SAT Training -- Wed Feb 1 All Day</Text>
              </View>
            </View>
            <View style={styles.divSecond}>
              <Text style={styles.divHeader}>Calendar</Text>
              <View style={styles.divListContainer}>
                {/* <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} /> */}
                <Text style={styles.monthHeader}>January</Text>
                <Text style={styles.listText}>No Remaining Events!</Text>
                <Text style={styles.monthHeader}>February</Text>
                <Text style={styles.listText}>Feb 17-20 -- Family Weekends (No Homework)</Text>
                <Text style={styles.listText}>Feb 20 -- Professional Learning Day (No Students)</Text>
                <Text style={styles.listText}>Feb 21 -- 5th Seconday Grading Cycle Begins (5SW)</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('about')}>
          <Text style={styles.footerText}>about</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('gallery')}>
          <Text style={styles.footerText}>gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('absences')}>
          <Text style={styles.footerText}>absences</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('classinfo')}>
          <Text style={styles.footerText}>class info</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerContainer: {
      width: '100%',
      padding: 20,
      backgroundColor: 'white',
      alignItems: 'flex-start',
      justifyContent: 'center',
      // borderBottomWidth: 1,
      // borderBottomColor: 'gray',
      marginTop: 40,
    },
    headerText: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    contentContainer: {
      flex: 1,
      width: '100%',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    divContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    div: {
      width: '100%',
      padding: 20,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
    },
    divSecond: {
      width: '100%',
      padding: 20,
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
    },
    divHeader: {
      textShadowRadius: 1,
      textShadowColor: 'black',
      fontSize: 20,
    },
    listText: {
      paddingBottom: 5,
      paddingTop: 5,
    },
    monthHeader: {
      fontSize: 15,
      fontStyle: 'italic',
      fontWeight: 'semi-bold',
      paddingBottom: 7,
      paddingTop: 7,
    },
    footerContainer: {
      flex: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 40,
    },
    footerText: {
      padding: 10,
      fontWeight: 'bold',
    }
});

export default Home;
