import {useNotification} from "../../../shared/providers/alertProvider";
import getProductDetailService from "../services/getProductDetailService";
import useFetchOrchestrator from "../../../shared/hooks/useFetchOrchestrator";


const useGetProductDetail = (productId) => {
    const {showNotification} = useNotification();

    const {data, loading, error} = useFetchOrchestrator(
        () => getProductDetailService(productId),
        {
            enabled: Boolean(productId),
            onError: () => {
                showNotification(
                    "Error al obtener los detalles del producto",
                    "error"
                );
            }
        }
    );

    return {
        productDetail: data,
        loading,
        error,
    }


}

export default useGetProductDetail;