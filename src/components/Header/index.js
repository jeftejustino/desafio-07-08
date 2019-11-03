import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { Container, Wrapper, Logo, Basket, TotalItens } from './styles';

export default function Header({ navigation }) {
  const totalCart = useSelector(state => state.cart.length);
  return (
    <Wrapper>
      <Container>
        <Logo />

        <Basket onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#fff" />
          <TotalItens>{totalCart}</TotalItens>
        </Basket>
      </Container>
    </Wrapper>
  );
}
