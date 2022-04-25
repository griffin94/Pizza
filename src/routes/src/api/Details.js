import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetailsData } from 'redux/actions/creators';

const useDetails = () => {
  const { id } = useParams();
  const { data, error, loading } = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    (!data || !data[id]) && loadData();
  }, []);

  const loadData = () => dispatch(fetchDetailsData(id));

  return {
    data: data && data[id],
    error,
    loadData,
    loading,
  };
};

export default useDetails;
