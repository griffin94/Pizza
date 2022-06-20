import React from 'react';
import PropTypes from 'prop-types';
import cs from './CartItem.module.scss';
import { cx } from 'utils';
import Counter from 'components/Basic/Counter';
import { FaTrashAlt } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { Button } from 'components';

const CartItem = ({
  amount,
  className,
  decrement,
  editProduct,
  image,
  increment,
  name,
  orderId,
  priceTotal,
  remove,
  values,
}) => {
  return (
    <li className={cx(className, cs.item)}>
      <div className={cx(cs.header)}>
        <div className={cx(cs.imageWrapper)}>
          <img src={image} alt={name} className={cx(cs.image)} />
        </div>
        <div>
          <h3 className={cx(cs.name)}>{name}</h3>
          <span className={cx(cs.price)}>{priceTotal} zł</span>
        </div>
      </div>
      {values && (
        <div className={cx(cs.details)}>
          <span>
            <span className={cx(cs.label)}>Rozmiar: </span>
            {values.size}
          </span>
          <span>
            <span className={cx(cs.label)}>Ciasto: </span>
            {values.dough}
          </span>
          {values.ingredients && (
            <span>
              <span className={cx(cs.label)}>Dodatkowe składniki: </span>
              {values.ingredients}
            </span>
          )}
        </div>
      )}
      <div className={cx(cs.navigation)}>
        <Counter
          className={cx(cs.counter)}
          count={amount}
          decrement={() => decrement(orderId)}
          increment={() => increment(orderId)}
          min={1}
        />
        {values && (
          <Button.Icon
            className={cx(cs.button)}
            onClick={() => editProduct(orderId)}
          >
            <FiSettings />
          </Button.Icon>
        )}
        <Button.Icon
          className={cx(cs.button)}
          onClick={() => remove(orderId)}
        >
          <FaTrashAlt />
        </Button.Icon>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  amount: PropTypes.number,
  className: PropTypes.string,
  decrement: PropTypes.func,
  editProduct: PropTypes.func,
  image: PropTypes.string,
  increment: PropTypes.func,
  name: PropTypes.string,
  priceTotal: PropTypes.number,
  remove: PropTypes.func,
  values: PropTypes.object,
};

export default CartItem;
