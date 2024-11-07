import { useState, useEffect } from "react";

function useCurrency(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        setLoading(true);
        setError(null);

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`, {
            signal: abortController.signal,
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            return res.json();
        })
        .then((res) => {
            setData(res[currency]);
            setLoading(false);
        })
        .catch((err) => {
            if (err.name !== "AbortError") { // Handle only non-abort errors
                setError(err.message);
                setLoading(false);
            }
        });

        return () => {
            abortController.abort(); // Cleanup on component unmount
        };
    }, [currency]);

    return { data, loading, error };
}

export default useCurrency;
