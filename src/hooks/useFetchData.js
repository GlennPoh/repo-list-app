import { useState, useEffect } from 'react';

function useFetchData(page = 1) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let apiUrl = 'https://api.github.com/search/repositories?q=created:>2024-07-15&sort=stars&order=desc';
    if (page > 1) {
        apiUrl += `&page=${page}`;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error + ${response.status}`);
                }
                const result = await response.json();
                setData(result?.items);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [page]);

    return { data, loading, error };
}

export default useFetchData;