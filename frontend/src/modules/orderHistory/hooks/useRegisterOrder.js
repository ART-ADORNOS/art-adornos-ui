import {useNotification} from "../../../shared/providers/alertProvider";
import registerOrderService from "../service/registerOrderService";

const useRegisterOrder = () => {
    const {showNotification} = useNotification();

    const handleRegisterOrder = async (e, dataOrder) => {
        e.preventDefault();

        try {
            await registerOrderService(dataOrder);
            showNotification("Orden registada con éxito", "success");
        } catch (error) {
            showNotification("Error al crear el carrito", "error");
        }
    };
    return {handleRegisterOrder};
}

export default useRegisterOrder;