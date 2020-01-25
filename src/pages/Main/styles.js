import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #dc1e2d;
`;

export const Display = styled.View`
  width: 300px;
  height: 250px;
  background: #232323;
  align-self: center;
  margin-top: 120px;
  border: #fff solid 20px;
`;

export const Header = styled.View`
  padding-top: 45px;
  flex-direction: row;
`;
export const ButtonLarge = styled.TouchableOpacity`
  background: #2aaafd;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: #fff solid 5px;
  margin: 15px;
`;
export const SmallButton = styled.TouchableOpacity`
  background: ${props => props.color};
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
`;

export const ViewButton = styled.View`
  margin-top: 10px;
  align-items: center;
`;

export const CameraButton = styled.TouchableOpacity`
  background: #fff;
  margin: 20px;
  border-radius: 150px;
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
`;
