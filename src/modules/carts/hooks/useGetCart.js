import {useEffect, useState} from "react";
import {useNotification} from "../../../shared/providers/alertProvider";
import {getCartService} from "../services/getCartService";

const useGetCart = () => {
    const {showNotification} = useNotification();
    const [carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const fetchCart = async () => {
            try {
                const data = await getCartService();
                setCarts(data);
            } catch {
                showNotification("Error al cargar la información del carrito", "error");
            } finally {
                setLoading(false);
            }
        };

        fetchCart().catch(() => {
            showNotification("Error en el servidor", "error");
        });

    }, [showNotification]);

    return {carts, loading};
};

export {useGetCart};
