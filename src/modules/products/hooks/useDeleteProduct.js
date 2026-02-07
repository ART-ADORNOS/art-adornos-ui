import {useNotification} from "../../../shared/providers/alertProvider";
import deleteProductService from "../services/deleteProductService";
import useMutationOrchestrator from "../../../shared/hooks/useMutationOrchestrator";


const useDeleteProduct = (productId) => {
    const {showNotification} = useNotification();

    const deleteProductCommand = useMutationOrchestrator(
        deleteProductService(productId),
        {
            onSuccess: () => {
                showNotification(
                    "Producto eliminado exitosamente",
                    "success"
                );
            },
            onError: () => {
                showNotification(
                    "Error al eliminar el producto",
                    "error"
                );
            },
        }
    );

    return {
        deleteProduct: deleteProductCommand.execute,
        isDeleting: deleteProductCommand.loading,
        error: deleteProductCommand.error,
    }
}

export {useDeleteProduct};