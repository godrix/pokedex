import React from 'react';
import {Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import bg from '../../assets/bg.png'

import { MaterialIcons } from '@expo/vector-icons'
export default function Detail({navigation}) {
  // const pokemon = navigation.getParam('pokemon')
  return (
    <ImageBackground source={bg}  style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 100
  },
})

Detail.navigationOptions = ({ navigation }) => ({
  
  headerTransparent: true,
  headerTintColor: '#FFF',
  headerLeftContainerStyle: {
    marginLeft: 20,
  },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Main');
      }}>
      <MaterialIcons name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});