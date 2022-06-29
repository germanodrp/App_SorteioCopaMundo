import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled.SafeAreaView`
background-color: #FBF1CD;
flex: 1;
text-align: center;
padding: 32px;

`;


export const Title = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 15px;
`;


export const ButtonSorteio = styled(TouchableOpacity)`
  padding: 15px;
  margin-bottom: auto;
  align-items: center;
  border-radius: 20px;
  background-color: #9A1032;
  margin-top: 600px;
  margin-left: 45px;
  margin-right: 45px;
`;

export const TableTeams = styled.View`
  background-color: blue;
`
