import {useNotification} from "../../../shared/providers/alertProvider";
import registerOrderService from "../service/registerOrderService";
import {transformOrderData} from "../utils/transformOrderData";

const useRegisterOrder = () => {
    const {showNotification} = useNotification();

    const handleRegisterOrder = async (e, dataOrder) => {
        e.preventDefault();
        try {
            const payload = transformOrderData(dataOrder)
            await registerOrderService(payload);
            showNotification("Orden registrada con éxito", "success");
        } catch (error) {
            showNotification("Error al registrar la orden", "error");
        }
    };
    return {handleRegisterOrder};
}

export default useRegisterOrder;