import React from 'react';
import { Button, List, Section } from 'components';
import useCart from './src/useCart';
import cs from './src/Cart.module.scss';
import { cx } from 'utils';
import { productHandler } from 'handlers';

const Cart = () =>
  (({ clear, continueShopping, price, products, ...props }) =>
    products.length > 0 ? (
      <>
        <List>
          {products.map((product) =>
            ((serializedProduct) => (
              <List.CartItem
                key={serializedProduct.orderId}
                {...serializedProduct}
                {...props}
              />
            ))(productHandler(product)),
          )}
        </List>
        <Section className={cx(cs.summary)}>
          <span>Do zapłaty:</span>
          <span>{price} zł</span>
        </Section>
        <Section className={cx(cs.navigation)}>
          <Button onClick={clear} className={cx(cs.button)}>
            Opróżnij koszyk
          </Button>
          <Button onClick={continueShopping} className={cx(cs.button)}>
            Kontynuuj zakupy
          </Button>
          <Button onClick={undefined} className={cx(cs.button)}>
            Kupuję
          </Button>
        </Section>
      </>
    ) : (
      <Section className={cx(cs.section)}>
        <h3 className={cx(cs.title)}>Twój koszyk jest pusty</h3>
        <p className={cx(cs.paragraph)}>
          Nic straconego! Na pewno znajdziesz coś smakowitego w naszym menu.
          Dodaj do koszyka produkty, na które masz ochotę i zamów je online -
          szybko i wygodnie.
        </p>
      </Section>
    ))(useCart());

export default Cart;
