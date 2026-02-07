import {useNotification} from "../../../shared/providers/alertProvider";
import useFetchOrchestrator from "../../../shared/hooks/useFetchOrchestrator";
import {getIndustry} from "../services/getIndustryService";

const useGetIndustry = () => {
    const {showNotification} = useNotification();

    const {data, loading, error} = useFetchOrchestrator(
        () => getIndustry(),
        {
            onError: () =>
                showNotification("Error al cargar la información de las industrias", "error"),
        }
    );

    return {
        industryOptions: data,
        loadingIndustry: loading,
        errorIndustry: error,
    };
};

export default useGetIndustry;
