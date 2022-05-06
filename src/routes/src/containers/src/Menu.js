import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenuData } from 'redux/actions/creators';
import { Menu } from '../../views';

const MenuContainer =  () => {
  const { data, error, loading } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    !data && loadData();
  }, []);

  const loadData = () => dispatch(fetchMenuData());
  
  return (
    <Menu
      data={data}
      error={error}
      loadData={loadData}
      loading={loading}
    />
  )
};

export default MenuContainer;