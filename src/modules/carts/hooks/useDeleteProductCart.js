import {useNotification} from "../../../shared/providers/alertProvider";
import useMutationOrchestrator from "../../../shared/hooks/useMutationOrchestrator";
import deleteProductCartService from "../services/deleteProductCartService";

const useDeleteProductCart = () => {
    const {showNotification} = useNotification();

    const deleteProductCartCommand = useMutationOrchestrator(
        deleteProductCartService,
        {
            onSuccess: () => {
                showNotification(
                    "Producto eliminado del carrito con éxito",
                    "success"
                );
            },
            onError: () => {
                showNotification(
                    "Error al eliminar el producto del carrito",
                    "error"
                );
            }
        }
    );

    return {
        deleteProductCart: deleteProductCartCommand.execute,
        isDeleting: deleteProductCartCommand.loading,
        error: deleteProductCartCommand.error,
    };
};

export default useDeleteProductCart;
