import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchUrl() {
    const response = await fetch(url);

    if (!response.ok) {
      setError(`${response.statusText} ${response.status}`);
      setLoading(false);
      return;
    }

    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading, error];
}

export { useFetch };
