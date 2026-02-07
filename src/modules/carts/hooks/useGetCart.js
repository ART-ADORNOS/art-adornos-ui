import {useNotification} from "../../../shared/providers/alertProvider";
import {getCartService} from "../services/getCartService";
import useFetchOrchestrator from "../../../shared/hooks/useFetchOrchestrator";

const useGetCart = () => {
    const {showNotification} = useNotification();

    const {data, loading, error} = useFetchOrchestrator(
        () => getCartService(),
        {
            onError: () =>
                showNotification("Error al cargar la información del carrito", "error"),
        }
    )

    return {
        cart: data,
        loadingCart: loading,
        errorCart: error,
    }
};

export {useGetCart};
