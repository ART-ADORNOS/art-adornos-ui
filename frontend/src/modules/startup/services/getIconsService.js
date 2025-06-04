import apiStore from "../../../core/api/ApiStore";
import {BASE_URLS_STARTUP} from "../../../core/constants/startup/urlsStartup";


const getIconsService = async () => {
    const response = await apiStore.get(BASE_URLS_STARTUP.STARTUP_ICONS)
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error al cargar los íconos');
    }
}

export default getIconsService;