import { Error, Loader } from 'components';

const withLoader = (WrappedComponent) => {
  const WithLoader = ({ data, error, loadData, loading }) =>
    error ? (
      <Error error={error} reload={loadData} />
    ) : loading || !data ? (
      <Loader />
    ) : (
      <WrappedComponent data={data} />
    );

  return WithLoader;
};

export default withLoader;
