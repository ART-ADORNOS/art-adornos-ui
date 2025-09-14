import {useNotification} from "../../../shared/providers/alertProvider";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ROUTES from "../../../core/constants/routes/routes";
import {deleteAccountService} from "../services/deleteAccountService";


const useDeleteAccount = (logout) => {
    const {showNotification} = useNotification();
    const {isDeleting, setIsDeleting} = useState(false);
    const navigate = useNavigate();

    const deleteAccount = async () => {
        setIsDeleting(true);
        try {
            const response = await deleteAccountService();
            if (response.status === 200) {
                showNotification("Cuenta eliminada con éxito", "success");
                logout(ROUTES.LOGIN);
                navigate(ROUTES.LOGIN);
            }
        } catch (error) {
            showNotification("Error al eliminar la cuenta", "error");
        } finally {
            setIsDeleting(false);
        }
    };

    return {deleteAccount, isDeleting};

}

export {useDeleteAccount};