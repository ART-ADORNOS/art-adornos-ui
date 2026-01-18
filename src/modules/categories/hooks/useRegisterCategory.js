import registerCategoryService from "../services/registerCategoryService";
import {useNotification} from "../../../shared/providers/alertProvider";
import {useState} from "react";
import useOrchestratedCommand from "../../../shared/hooks/useOrchestratedCommand";
import updateCategoryService from "../services/updateCategoryService";
import ROUTES from "../../../core/routes/routes";

const initialFormState = {
    start_up: "",
    name: "",
    description: ""
};

const useRegisterCategory = (categoryId = null) => {
    const {showNotification} = useNotification();
    const startupId = localStorage.getItem("selectedStartupId");

    const [formData, setFormData] = useState(initialFormState);

    const registerCategoryCommand = useOrchestratedCommand(
        registerCategoryService,
        {
            onSuccess: () => {
                showNotification(
                    "Categoría registrada exitosamente",
                    "success"
                );
            },
            onError: () => {
                showNotification(
                    "Error al registrar la categoría",
                    "error"
                );
            },
        }
    );

    const updateCategoryCommand = useOrchestratedCommand(
        updateCategoryService,
        {
            onSuccess: () => {
                showNotification(
                    "Categoría actualizada exitosamente",
                    "success"
                );
            },
            onError: () => {
                showNotification(
                    "Error al actualizar la categoría",
                    "error"
                );
            },
        }
    );

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e, navigate) => {
        e.preventDefault();
        const dataToSubmit = {
            ...formData,
            start_up: startupId
        };

        if (categoryId) {
            await updateCategoryCommand.execute(categoryId, dataToSubmit);
        } else {
            await registerCategoryCommand.execute(dataToSubmit);
        }
        navigate(ROUTES.PRODUCT_LIST);
    }


    return {
        formData,
        handleChange,
        handleSubmit,
        setFormData
    }
}

export default useRegisterCategory;
