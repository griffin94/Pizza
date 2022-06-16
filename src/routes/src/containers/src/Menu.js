import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenuData } from 'redux/actions/creators';
import { Menu } from '../../views';

const MenuContainer = () => {
  const { data, error, loading } = useSelector((state) => state.menu);
  const [activeFilter, setFilter] = useState(null);
  const [visibleData, setVisibleData] = useState(data);
  const dispatch = useDispatch();

  useEffect(() => {
    !data && loadData();
  }, []);

  useEffect(() => {
    setVisibleData(
      activeFilter ? { [activeFilter]: data[activeFilter] } : data,
    );
  }, [activeFilter, data]);

  const loadData = () => dispatch(fetchMenuData());

  const filter = (category) =>
    setFilter((currentFilter) =>
      currentFilter === category ? null : category,
    );

  return (
    <Menu
      activeFilter={activeFilter}
      data={data}
      error={error}
      filter={filter}
      loadData={loadData}
      loading={loading}
      visibleData={visibleData}
    />
  );
};

export default MenuContainer;
