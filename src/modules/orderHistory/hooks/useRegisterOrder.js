import {useNotification} from "../../../shared/providers/alertProvider";
import useMutationOrchestrator from "../../../shared/hooks/useMutationOrchestrator";
import registerOrderService from "../services/registerOrderService";
import {transformOrderData} from "../utils/transformOrderData";

const useRegisterOrder = () => {
    const {showNotification} = useNotification();

    const registerOrderMutation = useMutationOrchestrator(
        async (dataOrder) => {
            const payload = transformOrderData(dataOrder);
            return registerOrderService(payload);
        },
        {
            onSuccess: () => {
                showNotification(
                    "Orden registrada con éxito",
                    "success"
                );
            },
            onError: () => {
                showNotification(
                    "Error al registrar la orden",
                    "error"
                );
            }
        }
    );

    const handleRegisterOrder = async (e, dataOrder) => {
        e.preventDefault();
        await registerOrderMutation.execute(dataOrder);
    };

    return {
        handleRegisterOrder,
        loading: registerOrderMutation.loading,
        error: registerOrderMutation.error,
    };
};

export default useRegisterOrder;
