import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetailsData } from 'redux/actions/creators';
import { Details } from '../../views';

const DetailsContainer = () => {
  const { id } = useParams();
  const { data, error, loading } = useSelector((state) => state.details);
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    !getProductFromCart() && !(data && data[id]) && loadData();
  }, []);

  const loadData = () => dispatch(fetchDetailsData(id));
  const getProductFromCart = () =>
    products.find(({ orderId }) => orderId === id);

  return (
    <Details
      data={getProductFromCart() || (data && data[id])}
      error={error}
      loadData={loadData}
      loading={loading}
    />
  );
};

export default DetailsContainer;
