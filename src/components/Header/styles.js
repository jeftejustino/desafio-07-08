import styled from 'styled-components/native';

import colors from '../../styles/colors';

import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView``;

export const Container = styled.View`
  background: ${colors.dark};
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const Basket = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  align-items: center;
  justify-content: center;
`;

export const TotalItens = styled.Text`
  position: absolute;
  background: #7159c1;
  color: #fff;
  border-radius: 10px;
  min-width: 20px;
  min-height: 20px;
  text-align: center;
  top: -8px;
  right: -8px;
  padding: 2px;
  font-size: 12px;
  overflow: hidden;
`;
