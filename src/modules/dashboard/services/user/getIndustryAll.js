import storeApi from "../../../../core/api/storeApi";
import {INDUSTRY_ENDPOINTS} from "../../../startups/constants/industry/endpoints";


export const getIndustryAll = async () => {
    const response = await storeApi.get(INDUSTRY_ENDPOINTS.GET_INDUSTRY);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error al cargar la información de la industria');
    }
}

export default getIndustryAll;