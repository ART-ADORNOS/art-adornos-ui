import {useNotification} from "../../../shared/providers/alertProvider";
import deleteStartupService from "../services/deleteStartupService";
import useMutationOrchestrator from "../../../shared/hooks/useMutationOrchestrator";


const useDeleteStartups = (startupId) => {
    const {showNotification} = useNotification();

    const deleteStartupCommand = useMutationOrchestrator(
        deleteStartupService,
        {
            onSuccess: () => {
                showNotification(
                    "Startup eliminada con éxito",
                    "success"
                );
            },
            onError: () => {
                showNotification(
                    "Error al eliminar la startup",
                    "error"
                );
            }
        }
    );

    return {
        deleteStartup: () => deleteStartupCommand.execute(startupId),
        isDeleting: deleteStartupCommand.loading,
        error: deleteStartupCommand.error,
    }

}

export {useDeleteStartups};