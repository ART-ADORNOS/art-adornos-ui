import {useNotification} from "../../../shared/providers/alertProvider";
import getProducts from "../services/productService";
import useOrchestratedFetch from "../../../shared/hooks/useOrchestratedFetch";


const useGetProducts = (startupId) => {
    const {showNotification} = useNotification();

    const {data, loading, error} = useOrchestratedFetch(
        () => getProducts(startupId),
        {
            onError: () =>
                showNotification("Error al cargar la información de los productos", "error"),
            enabled: !!startupId,
        }
    );

    return {
        products: Array.isArray(data) ? data : [],
        loadingTwo: loading,
        errorTwo: error,
    }
};

export {useGetProducts};