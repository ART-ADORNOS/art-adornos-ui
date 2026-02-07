import deleteCategoryService from "../services/deleteCategoryService";
import {useNotification} from "../../../shared/providers/alertProvider";
import useMutationOrchestrator from "../../../shared/hooks/useMutationOrchestrator";


const useDeleteCategory = () => {
    const {showNotification} = useNotification();

    const deleteCategoryCartCommand = useMutationOrchestrator(
        deleteCategoryService,
        {
            onSuccess: () => {
                showNotification(
                    "Categoría eliminada con éxito",
                    "success"
                );
            },
            onError: () => {
                showNotification(
                    "Error al eliminar la categoría",
                    "error"
                );
            }
        }
    );
    return {
        deleteCategory: deleteCategoryCartCommand.execute,
        isDeleting: deleteCategoryCartCommand.loading,
        error: deleteCategoryCartCommand.error,
    }
}

export {useDeleteCategory};