import {useNotification} from "../../../shared/providers/alertProvider";
import {useState} from "react";
import deleteStartupService from "../services/deleteStartupService";


const useDeleteStartups = (startupId) => {
    const {showNotification} = useNotification();
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteStartup = async () => {
        setIsDeleting(true)
        try {
            const result = await deleteStartupService(startupId);
            if (result) {
                showNotification("Startup eliminado con éxito", "success");
            }
        } catch (error) {
            showNotification("Error al eliminar el startup", "error");
        } finally {
            setIsDeleting(false);
        }
    };
    return {deleteStartup, isDeleting};
}

export {useDeleteStartups};