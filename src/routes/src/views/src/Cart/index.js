import React from 'react';
import { List, Section } from 'components';
import useCart from './src/useCart';
import cs from './src/Cart.module.scss';
import { cx } from 'utils';
import { productHandler } from 'handlers';

const Cart = () =>
	(({ products, ...props }) =>
		products.length > 0 ? (
			<List>
				{products.map((product) => ((serializedProduct) => (
          <List.CartItem key={serializedProduct.id} {...serializedProduct} {...props} />
        ))(productHandler(product)))}
			</List>
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
