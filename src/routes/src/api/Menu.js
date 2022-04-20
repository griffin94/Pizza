import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenuData } from 'redux/actions/creators';

const useMenu = () => {
  const { data, error, loading } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    !data && loadData();
  }, []);

  const loadData = () => dispatch(fetchMenuData());
  return {
    data,
    error,
    loadData,
    loading,
  };
};

export default useMenu;
