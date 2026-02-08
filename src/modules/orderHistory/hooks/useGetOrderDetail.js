import {useNotification} from "../../../shared/providers/alertProvider";
import {useState} from "react";
import useFetchOrchestrator from "../../../shared/hooks/useFetchOrchestrator";
import {getOrderDetail} from "../services/getOrderDetail";

const useGetOrderDetail = () => {
    const {showNotification} = useNotification();
    const [orderId, setOrderId] = useState(null);

    const {data, loading} = useFetchOrchestrator(
        () => getOrderDetail(orderId),
        {
            enabled: Boolean(orderId),
            onError: () => {
                showNotification(
                    "Error al obtener los detalles de la orden",
                    "error"
                );
            }
        }
    );

    const handleGetOrderDetails = (id) => {
        setOrderId(id);
    };

    return {
        orderDetail: data,
        handleGetOrderDetails,
        loading,
    };
};

export {useGetOrderDetail};
