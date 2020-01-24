import React, { useState, useEffect } from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import PokeCamera from '../../components/PokeCamera';
import { Container, Display, Header, ButtonLarge, SmallButton } from './styles';
import api from '../../services/api';
import {pokenome} from '../../services/pokemon';

export default function Main({navigation}) {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false)

  const onChangePhoto = newPhoto => {
    setPhoto(newPhoto);
    setIsCameraVisible(false);
  };

  const onCloseCamera = () => {
    setIsCameraVisible(false);
  };

  useEffect(()=>{
    if(photo !== null){
      getPokemon()
    }
  },[photo])

  
  async function getPokemon(){
    setLoading(true);
    const response = await api.post('',{"requests": [{
      "image": {
          "content": photo
      },
      "features": [{
          "type": "WEB_DETECTION"
      }]
  }]
});
  const { label } = response.data.responses[0].webDetection.bestGuessLabels[0]
  isPokemon(label)
  setLoading(false)
  }

  function isPokemon(name){
   const findPoke =  pokenome.find(element =>name.includes(element.toLowerCase()))
    navigation.navigate('Detail', {pokemon:findPoke})
    console.log(findPoke)
  }

  return (
    <Container>
    <Header>
      <ButtonLarge></ButtonLarge>
      <SmallButton color="#9B1113"></SmallButton>
      <SmallButton color="#f1c40f"></SmallButton>
      <SmallButton color="#16a085"></SmallButton>
    </Header>
    <Display>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={{ uri: `data:image/png;base64,${photo}` }}
        />
      </Display>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setIsCameraVisible(true);
          }}
        >
          {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <MaterialIcons name="camera-alt" size={40} color={"#f37272"} />}
          
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Detail', {pokemon:'findPoke'})
          }}
        >
         <MaterialIcons name="home" size={40} color={"#f37272"} />
          
        </TouchableOpacity>
        
      </View>
      <PokeCamera
        isVisible={isCameraVisible}
        onChangePhoto={onChangePhoto}
        onCloseCamera={onCloseCamera}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    marginTop: 60
  },
  photo: {
    width: 300,
    height: 200,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: 80,
    borderColor:"#eded"
  },
  buttons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 150,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center"
  },
});