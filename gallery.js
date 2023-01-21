import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Gallery = () => {
  const [image, setImage] = useState(null);


const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      alert('Thank you! Your image was successfully uploaded');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
          <Text style={styles.headerText} >What Cinco means to you</Text>
      </View>  
      {!image && (
          <Button title="upload an ephemeral photo that displays what cinco means to you at this moment" onPress={pickImage} />
      )}  
      {image && (  
        <Image source={{ uri: image }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: 4,
    // backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: 'gray',
    marginTop: 100,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Gallery;