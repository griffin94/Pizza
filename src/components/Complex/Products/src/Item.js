import PropTypes from 'prop-types';
import cs from './Item.module.scss';
import { cx } from 'utils';
import { GiChiliPepper, GiThreeLeaves } from 'react-icons/gi';
import { AiFillStar } from 'react-icons/ai';
import { Button } from 'components';
import { CATEGORIES } from 'routes/src/constans';

const Item = ({
  category,
  description,
  id,
  image,
  ingrediens,
  isBestseller,
  isNew,
  isSpicy,
  isVege,
  name,
  onClick,
  price,
}) =>
  [id, name, price].every((el) => el !== undefined) ? (
    <li className={cx(cs.item)}>
      <img src={image} alt={name} className={cx(cs.image)} />
      <div className={cx(cs.row)}>
        <span className={cx(cs.name)}>{name}&nbsp;</span>
        <span className={cx(cs.price)}>
          {category === CATEGORIES.PIZZA && 'od'} {price}zł
        </span>
      </div>
      {ingrediens && (
        <div className={cx(cs.row)}>
          <span>{ingrediens}</span>
        </div>
      )}
      {description && (
        <div className={cx(cs.row)}>
          <span>{description}</span>
        </div>
      )}
      <div className={cx(cs.row, cs.icons)}>
        {isBestseller && (
          <span className={cx(cs.icon, cs.bestseller)}>
            <AiFillStar />
            &nbsp;Bestseller
          </span>
        )}
        {isNew && (
          <span className={cx(cs.icon, cs.new)}>
            <AiFillStar />
            &nbsp;New
          </span>
        )}
        {isSpicy && (
          <span className={cx(cs.icon, cs.spicy)}>
            <GiChiliPepper />
            &nbsp;Spicy
          </span>
        )}
        {isVege && (
          <span className={cx(cs.icon, cs.vege)}>
            <GiThreeLeaves />
            &nbsp;Vege
          </span>
        )}
      </div>
      <Button onClick={() => onClick(category)(id)}>
        {category === CATEGORIES.PIZZA ? 'Wybierz' : 'Dodaj'}
      </Button>
    </li>
  ) : null;

Item.propTypes = {
  category: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  ingrediens: PropTypes.string,
  isBestseller: PropTypes.bool,
  isNew: PropTypes.bool,
  isSpicy: PropTypes.bool,
  isVege: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  price: PropTypes.number.isRequired,
};

export default Item;
