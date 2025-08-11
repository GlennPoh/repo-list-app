import React, { useState, useEffect } from 'react';

function useFetchData() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Fetching data...');
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/search/repositories?q=created:>2024-07-15&sort=stars&order=desc');
                if (!response.ok) {
                    throw new Error(`HTTP error ' + ${response.status}`);
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
    }, []);

    return {data, loading, error};
}

export default useFetchData;