import { Error, Loader } from 'components';

const withLoader = (WrappedComponent) => {
  const WithLoader = ({ error, loading, loadData, ...props }) =>
    error ? (
      <Error error={error} reload={loadData} />
    ) : loading ? (
      <Loader />
    ) : (
      <WrappedComponent {...props} />
    );

  return WithLoader;
};

export default withLoader;
