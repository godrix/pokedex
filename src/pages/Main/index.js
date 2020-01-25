import React, { useState, useEffect } from 'react';
import { ImageBackground, ActivityIndicator, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import PokeCamera from '../../components/PokeCamera';
import {
  Container,
  Display,
  Header,
  ButtonLarge,
  SmallButton,
  ViewButton,
  CameraButton,
} from './styles';
import api from '../../services/api';
import { pokenome } from '../../services/pokemon';

export default function Main({ navigation }) {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChangePhoto = newPhoto => {
    setPhoto(newPhoto);
    setIsCameraVisible(false);
  };

  const onCloseCamera = () => {
    setIsCameraVisible(false);
  };

  useEffect(() => {
    async function getPokemon() {
      setLoading(true);
      try {
        const response = await api.post('', {
          requests: [
            {
              image: {
                content: photo,
              },
              features: [
                {
                  type: 'WEB_DETECTION',
                },
              ],
            },
          ],
        });

        const {
          label,
        } = response.data.responses[0].webDetection.bestGuessLabels[0];

        const findPoke = pokenome.find(element =>
          label.includes(element.toLowerCase()),
        );

        if (findPoke) {
          navigation.navigate('Detail', { pokemon: findPoke });
        } else {
          Alert.alert('Oh não!', `Será que isso não é um(a) ${label}?`);
        }
      } catch (error) {
        Alert.alert('Oh não!', 'Ocorreu um erro na requisição');
      }

      setLoading(false);
    }
    if (photo !== null) {
      getPokemon();
    }
  }, [navigation, photo]);

  return (
    <Container>
      <Header>
        <ButtonLarge />
        <SmallButton color="#9B1113" />
        <SmallButton color="#f1c40f" />
        <SmallButton color="#16a085" />
      </Header>
      <Display>
        <ImageBackground
          style={{ width: '100%', height: '100%' }}
          source={{ uri: `data:image/png;base64,${photo}` }}
        />
      </Display>
      <ViewButton>
        <CameraButton
          onPress={() => {
            setIsCameraVisible(true);
          }}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <MaterialIcons name="camera-alt" size={40} color="#f37272" />
          )}
        </CameraButton>
      </ViewButton>
      <PokeCamera
        isVisible={isCameraVisible}
        onChangePhoto={onChangePhoto}
        onCloseCamera={onCloseCamera}
      />
    </Container>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
