import React, { useEffect, useState } from 'react';
import { BASE_POKEMON_API } from 'react-native-dotenv';
import PropTypes from 'prop-types';
import bg from '../../assets/bg.png';
import api from '../../services/api';
import {
  Hp,
  Name,
  Card,
  TextData,
  PokeButon,
  TextLabel,
  Container,
  PokeImage,
  DisplayName,
  DisplayInfo,
  PokeTextButton,
  DisplayInfoBox,
} from './styles';

export default function Detail({ navigation }) {
  const [pokeImage, setPokeImage] = useState();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const pokemon = navigation.getParam('pokemon');

  useEffect(() => {
    async function loadPokeApi() {
      const response = await api.get(
        `${BASE_POKEMON_API}/pokemon/${pokemon.toLowerCase()}`,
      );
      setHeight(response.data.height);
      setWeight(response.data.weight);
      setPokeImage(response.data.sprites.front_default);
    }
    loadPokeApi();
  }, [pokemon]);

  return (
    <Container source={bg} style={{ width: '100%', height: '100%' }}>
      <PokeImage source={{ uri: pokeImage }} />
      <Card>
        <DisplayName>
          <Name>{pokemon}</Name>
          <Hp />
        </DisplayName>
        <DisplayInfo>
          <DisplayInfoBox>
            <TextData>{weight}</TextData>
            <TextLabel>WEIGHT</TextLabel>
          </DisplayInfoBox>
          <DisplayInfoBox>
            <TextData>{height}</TextData>
            <TextLabel>HEIGHT</TextLabel>
          </DisplayInfoBox>
        </DisplayInfo>
        <PokeButon
          onPress={() => {
            navigation.navigate('Main');
          }}>
          <PokeTextButton>Voltar</PokeTextButton>
        </PokeButon>
      </Card>
    </Container>
  );
}

Detail.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
