import { useState, useEffect } from 'react';

const useMenu = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    try {
      setLoading(true);
      const response = await fetch('/menu.json');
      const { data } = await response.json();
      setData(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  return {
    data,
    error,
    loading,
  };
};

export default useMenu;
