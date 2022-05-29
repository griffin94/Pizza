import { Error, Loader } from 'components';

const withLoader = (WrappedComponent) => {
  const WithLoader = ({ data, error, loadData, loading, ...props }) =>
    loading ? (
      <Loader />
    ) : error ? (
      <Error error={error} reload={loadData} />
    ) : data ? (
      <WrappedComponent data={data} {...props} />
    ) : null;

  return WithLoader;
};

export default withLoader;
