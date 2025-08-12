import React, { useState } from 'react';
import useFetchData from './useFetchData';

function usePageNumber(initialPage = 1) {
    const [page, setPage] = useState(initialPage);
    const { data, loading, error } = useFetchData(page);

    const updatePage = (newPage) => {
        const num = Number(newPage);
        if (!Number.isInteger(num) || num < 1) return;
        setPage(num);
    };
    return { page, setPage, updatePage, data, loading, error };
}

export default usePageNumber;