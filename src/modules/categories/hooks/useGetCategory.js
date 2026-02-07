import {getCategory} from "../services/getCategory";
import {useNotification} from "../../../shared/providers/alertProvider";
import useFetchOrchestrator from "../../../shared/hooks/useFetchOrchestrator";

const useGetCategories = (startupId) => {
    const {showNotification} = useNotification();

    const {data, loading, error} = useFetchOrchestrator(
        () => getCategory(startupId),
        {
            onError: () =>
                showNotification("Error al cargar la información de las categorías", "error"),
            enabled: !!startupId,
        }
    );

    return {
        categories: Array.isArray(data) ? data : [],
        loading,
        error,
    }
};

export {useGetCategories};
