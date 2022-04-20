import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetailsData } from 'redux/actions/creators';

const useDetails = () => {
  const { name } = useParams();
  const { data, error, loading } = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    (!data || !data[name]) && loadData();
  }, []);

  const loadData = () => dispatch(fetchDetailsData(name));

  return {
    data: data && data[name],
    error,
    loadData,
    loading,
  };
};

export default useDetails;
