import {useNotification} from "../../../shared/providers/alertProvider";
import {getIndustry} from "../services/getIndustryService";
import {useEffect, useState} from "react";


const useGetIndustry = () => {
    const {showNotification} = useNotification();
    const [industryOptions, setIndustryOptions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchIndustry = async () => {
            try {
                const data = await getIndustry();
                setIndustryOptions(data);
            } catch (error) {
                showNotification("Error al cargar la información de las industrias", "error");
            }finally {
                setLoading(false);
            }
        };

        fetchIndustry().catch((error) => console.error("Error en fetchIndustry:", error));

    }, [showNotification]);
    return {industryOptions, loading};

};
export default useGetIndustry;