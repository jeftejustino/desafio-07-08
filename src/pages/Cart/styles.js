import styled from 'styled-components/native';
import { lighten } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.ScrollView`
  background: ${lighten(0.05, colors.dark)};
  flex: 1;
`;

export const CartContainer = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 15px;
  padding: 8px;
`;

export const CartItems = styled.View``;

export const CartTotal = styled.View`
  align-items: center;
  margin: 12px 0px;
`;

export const CartTotalTitle = styled.Text`
  color: #aaa;
  font-size: 16px;
`;

export const CartTotalPrice = styled.Text`
  font-weight: bold;
  font-size: 32px;
`;

export const CartButton = styled.View`
  align-items: center;
  background: ${colors.primary};
  border-radius: 4px;
`;

export const CartButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  padding: 8px 0px;
  font-weight: bold;
`;

export const ProductCart = styled.View`
  margin: 10px 0px;
`;

export const ProductCartTop = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductCartImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductCartInfo = styled.View`
  flex: 1;
  padding: 0px 8px;
`;

export const ProductCartTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`;

export const ProductCartPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ProductCartRemove = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

export const ProductCartBottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #f0f0f0;
  align-items: center;
  padding: 8px 8px;
`;

export const ProductCartQtd = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductCartQtdInput = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  border: 1px solid #c9c9c9;
  text-align: center;
  line-height: 20px;
  height: 30px;
  margin: 0px 5px;
  padding: 0px 5px;
  width: 52px;
  border-radius: 4px;
`;

export const ProductCartQtdIncrement = styled.TouchableOpacity`
  padding: 5px;
`;

export const ProductCartQtdDecrement = styled.TouchableOpacity`
  padding: 5px;
`;

export const ProductCartTotal = styled.View``;

export const ProductCartTotalText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
