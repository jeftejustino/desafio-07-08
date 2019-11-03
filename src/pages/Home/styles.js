import styled from 'styled-components/native';
import { darken, lighten } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${lighten(0.05, colors.dark)};
`;

export const ProductList = styled.FlatList`
  margin: 20px 0px;
  flex-grow: 0;
`;

export const Product = styled.View`
  background: #fff;
  margin: 15px;
  border-radius: 5px;
  width: 220px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #333;
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  color: #000;
  font-size: 21px;
  margin: 8px 0px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  margin-top: auto;
  border-radius: 4px;
  overflow: hidden;
  align-items: center;
`;

export const ProductAmount = styled.View`
  background: ${darken(0.2, colors.primary)};
  flex-direction: row;
  padding: 8px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 6px;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  flex: 1;
  text-align: center;
  font-weight: bold;
`;
