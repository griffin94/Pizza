import PropTypes from 'prop-types';
import cs from './Item.module.scss';
import { cx } from 'utils';
import { GiChiliPepper, GiThreeLeaves } from 'react-icons/gi';
import { AiFillStar } from 'react-icons/ai';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';

const Item = ({
  category,
  id,
  image,
  ingrediens,
  isBestseller,
  isNew,
  isSpicy,
  isVege,
  name,
  price,
}) =>
  ((navigate) =>
    [id, ingrediens, name, price].every((el) => el !== undefined) ? (
      <li className={cx(cs.item)}>
        <img src={image} alt={name} className={cx(cs.image)} />
        <div className={cx(cs.row)}>
          <span className={cx(cs.name)}>{name}&nbsp;</span>
          <span className={cx(cs.price)}>od {price}zł</span>
        </div>
        <div className={cx(cs.row)}>
          <span>{ingrediens}</span>
        </div>
        <div className={cx(cs.row)}>
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
        <Button onClick={() => navigate(id)}>Wybierz</Button>
      </li>
    ) : null)(useNavigate());

Item.propTypes = {
  category: PropTypes.string,
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  ingrediens: PropTypes.string.isRequired,
  isBestseller: PropTypes.bool,
  isNew: PropTypes.bool,
  isSpicy: PropTypes.bool,
  isVege: PropTypes.bool,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.exact({
      small: PropTypes.number,
      medium: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
  ]),
};

export default Item;
