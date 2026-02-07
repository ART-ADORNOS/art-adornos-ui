import {useNotification} from "../../../shared/providers/alertProvider";
import {getOrder} from "../services/getOrderService";
import useFetchOrchestrator from "../../../shared/hooks/useFetchOrchestrator";


const useGetOrder = () => {
    const {showNotification} = useNotification();

    const {data, loading, error} = useFetchOrchestrator(
        () => getOrder(),
        {
            onError: () =>
                showNotification("Error al cargar la información de las órdenes", "error"),
        }
    );

    return {
        order: data,
        loading,
        error,
    }
}


export {useGetOrder};