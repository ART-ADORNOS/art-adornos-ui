import {useRef, useState} from "react";

const useOrchestratedCommand = (commandFn, options = {}) => {
    const {onSuccess, onError, preventConcurrent = true} = options;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const isExecutingRef = useRef(false);

    const execute = async (...args) => {
        if (preventConcurrent && isExecutingRef.current) return;

        isExecutingRef.current = true;
        setLoading(true);
        setError(null);

        try {
            const result = await commandFn(...args);
            onSuccess?.(result);
            return result;
        } catch (err) {
            setError(err);
            onError?.(err);
            throw err;
        } finally {
            setLoading(false);
            isExecutingRef.current = false;
        }
    };

    return {
        execute,
        loading,
        error,
    };
};

export default useOrchestratedCommand;
