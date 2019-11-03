import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CartContainer,
  CartItems,
  CartTotal,
  CartTotalPrice,
  CartTotalTitle,
  CartButton,
  CartButtonText,
  ProductCart,
  ProductCartTop,
  ProductCartImage,
  ProductCartInfo,
  ProductCartTitle,
  ProductCartPrice,
  ProductCartRemove,
  ProductCartBottom,
  ProductCartQtd,
  ProductCartQtdInput,
  ProductCartQtdIncrement,
  ProductCartQtdDecrement,
  ProductCartTotal,
  ProductCartTotalText,
} from './styles';
import { formatPrice } from '../../util/format';
import colors from '../../styles/colors';

import * as CartActions from '../../store/modules/cart/actions';

export default function Cart() {
  const total = formatPrice(
    useSelector(state =>
      state.cart.reduce((total, p) => {
        return total + p.price * p.amount;
      }, 0)
    )
  );
  const products = useSelector(state =>
    state.cart.map(p => {
      return {
        ...p,
        subtotal: formatPrice(p.price * p.amount),
      };
    })
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function renderProduct(item) {
    return (
      <ProductCart key={item.id}>
        <ProductCartTop>
          <ProductCartImage source={{ uri: item.image }} />

          <ProductCartInfo>
            <ProductCartTitle>{item.title}</ProductCartTitle>
            <ProductCartPrice>{formatPrice(item.price)}</ProductCartPrice>
          </ProductCartInfo>

          <ProductCartRemove
            onPress={() => dispatch(CartActions.removeFromCart(item.id))}
          >
            <Icon name="delete-forever" size={24} color={colors.primary} />
          </ProductCartRemove>
        </ProductCartTop>

        <ProductCartBottom>
          <ProductCartQtd>
            <ProductCartQtdDecrement onPress={() => decrement(item)}>
              <Icon
                name="remove-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductCartQtdDecrement>

            <ProductCartQtdInput value={String(item.amount)} />

            <ProductCartQtdIncrement onPress={() => increment(item)}>
              <Icon
                name="add-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductCartQtdIncrement>
          </ProductCartQtd>

          <ProductCartTotal>
            <ProductCartTotalText>{item.subtotal}</ProductCartTotalText>
          </ProductCartTotal>
        </ProductCartBottom>
      </ProductCart>
    );
  }

  return (
    <Container>
      <CartContainer>
        <CartItems>{products.map(p => renderProduct(p))}</CartItems>

        <CartTotal>
          <CartTotalTitle>Total</CartTotalTitle>
          <CartTotalPrice>{total}</CartTotalPrice>
        </CartTotal>

        <CartButton>
          <CartButtonText>FINALIZAR PEDIDO</CartButtonText>
        </CartButton>
      </CartContainer>
    </Container>
  );
}
