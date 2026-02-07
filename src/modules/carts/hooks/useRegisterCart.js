import {useNotification} from "../../../shared/providers/alertProvider";
import useMutationOrchestrator from "../../../shared/hooks/useMutationOrchestrator";
import registerCartService from "../services/registerCartService";

const useRegisterCart = () => {
    const {showNotification} = useNotification();

    const registerCart = useMutationOrchestrator(
        registerCartService,
        {
            onSuccess: () => {
                showNotification(
                    "Carrito creado con éxito",
                    "success"
                );
            },
            onError: () => {
                showNotification(
                    "Error al crear el carrito",
                    "error"
                );
            }
        }
    );

    const handleSubmit = async (e, data) => {
        e.preventDefault();
        await registerCart.execute(data);
    };

    return {
        handleSubmit,
        loading: registerCart.loading,
        error: registerCart.error,
    };
};

export default useRegisterCart;
