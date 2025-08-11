import React, { useState, useEffect } from 'react';

function useFetch() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Fetching data...');
        async () => {
            try {
                const response = await fetch('https://api.github.com/search/repositories?q=created:>2024-07-15&sort=stars&order=desc');
                if (!response.ok) {
                    throw new Error(`HTTP error ' + ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        console.log('Response' + response.json());
        
        return [data, loading, error];
    }, []);
}

export default useFetch;