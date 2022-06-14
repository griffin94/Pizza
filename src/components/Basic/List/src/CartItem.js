import React from 'react';
import PropTypes from 'prop-types';
import cs from './CartItem.module.scss';
import { cx } from 'utils';
import Counter from 'components/Basic/Counter';
import { FaTrashAlt } from 'react-icons/fa';
import { Button } from 'components';

const CartItem = ({
  amount,
  className,
  decrement,
  details,
  id,
  image,
  increment,
  name,
  priceTotal,
  remove,
}) => {
  return (
    <li className={cx(className, cs.item)}>
      <div className={cx(cs.header)}>
        <img src={image} alt={name} className={cx(cs.image)} />
        <div>
          <h3 className={cx(cs.name)}>{name}</h3>
          <span className={cx(cs.price)}>{priceTotal} zł</span>
        </div>
      </div>
      {details && (
        <div className={cx(cs.details)}>
          <span>
            <span className={cx(cs.label)}>Rozmiar: </span>
            {details.size}
          </span>
          <span>
            <span className={cx(cs.label)}>Ciasto: </span>
            {details.dough}
          </span>
          {details.ingredients && (
            <span>
              <span className={cx(cs.label)}>Dodatkowe składniki: </span>
              {details.ingredients}
            </span>
          )}
        </div>
      )}
      <div className={cx(cs.navigation)}>
        <Counter
          className={cx(cs.counter)}
          count={amount}
          decrement={() => decrement(id)}
          increment={() => increment(id)}
          min={1}
        />
        <Button.Icon className={cx(cs.button)} onClick={() => remove(id)}>
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
  id: PropTypes.string,
  image: PropTypes.string,
  increment: PropTypes.func,
  name: PropTypes.string,
  priceTotal: PropTypes.number,
  remove: PropTypes.func,
};

export default CartItem;
