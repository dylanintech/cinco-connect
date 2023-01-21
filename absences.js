import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { A } from '@expo/html-elements';

const Absences = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Report Absences</Text>
            </View>
            <ScrollView>
              <Text>You can report absences <A style={styles.linkText}href='https://tx50010808.schoolwires.net/domain/5809'>here</A></Text>
            </ScrollView>
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
        marginTop: 40,
      },
      headerText: {
        fontSize: 25,
        fontWeight: 'bold',
      },
      linkText: {
        textDecorationLine: 'underline',
    },
});

export default Absences;