import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  align-items: center;
  justify-content: center;
`;

export const PokeImage = styled.Image`
  width: 300px;
  height: 300px;
  z-index: 2;
`;

export const Card = styled.View`
  margin-top: -100px;
  background: #fafafa;
  width: 80%;
  height: 30%;
  border-radius: 10px;
`;

export const DisplayName = styled.View`
  align-items: center;
  justify-content: center;
`;
export const Name = styled.Text`
  margin-top: 50px;
  font-weight: bold;
  font-size: 25px;
  color: #44696c;
`;
export const Hp = styled.View`
  background: #6eedb7;
  width: 60%;
  height: 5px;
  border-radius: 2px;
`;

export const DisplayInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const DisplayInfoBox = styled.View`
  margin-top: 10px;
`;

export const TextData = styled.Text`
  color: #44696c;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;
export const TextLabel = styled.Text`
  color: #bac7c8;
`;

export const PokeButon = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: #24ccaa;
  border-radius: 25px;
  margin: 0 auto;
  margin-top: 25px;
`;

export const PokeTextButton = styled.Text`
  text-transform: uppercase;
  color: #e8f0e1;
  font-size: 25px;
`;
