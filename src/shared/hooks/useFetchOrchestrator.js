import {useEffect, useRef, useState} from "react";

const useFetchOrchestrator = (fetchFn, options = {}) => {
    const {onError, enabled = true} = options;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const hasFetchedRef = useRef(false);
    const hasErroredRef = useRef(false);

    useEffect(() => {
        if (!enabled) return;
        if (hasFetchedRef.current || hasErroredRef.current) return;

        hasFetchedRef.current = true;
        setLoading(true);

        fetchFn()
            .then((response) => {
                setData(response);
            })
            .catch((err) => {
                hasErroredRef.current = true;
                setError(err);
                onError?.(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [enabled]);

    return {
        data,
        loading,
        error,
    };
};

export default useFetchOrchestrator;
