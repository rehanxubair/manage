import { useState, useEffect } from 'react';

// Custom hook to fetch data from a given URL
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data from the given URL
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result); // Update data state
    } catch (err) {
      setError(err.message); // Capture and set error message
    } finally {
      setLoading(false); // Set loading to false after the fetch
    }
  };

  // useEffect to call fetchData when the URL changes
  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error }; // Return data, loading, and error
};

export default useFetch;
