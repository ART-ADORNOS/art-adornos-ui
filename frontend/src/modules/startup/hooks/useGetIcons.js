import {useEffect, useState} from "react";
import {useNotification} from "../../../shared/providers/alertProvider";
import getIconsService from "../services/getIconsService";


const useGetIcons = () => {
    const {showNotification} = useNotification();
    const [icons, setIcons] = useState([]);
    const [loadingIcons, setLoadingIcons] = useState(true);

    useEffect(() => {
        setLoadingIcons(true);
        const fetchIcons = async () => {
            try {
                const data = await getIconsService();
                setIcons(data);
            } catch (error) {
                showNotification("Error al cargar los íconos", "error");
            } finally {
                setLoadingIcons(false);
            }
        };

        fetchIcons().catch((error) => console.error("Error en fetchIcons:", error));

    }, [showNotification])
    return {icons, loadingIcons};
}

export default useGetIcons;