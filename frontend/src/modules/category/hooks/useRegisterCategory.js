import {useContext, useState} from "react";
import registerCategoryService from "../services/registerCategoryService";
import {useNotification} from "../../../shared/providers/alertProvider";
import {StartupContext} from "../../startup/context/StartupProvider";
import updateCategoryService from "../services/updateCategoryService";


const useRegisterCategory = (categoryId = null) => {
    const {selectedStartup} = useContext(StartupContext);
    const {showNotification} = useNotification();

    const [formData, setFormData] = useState({
        start_up: "",
        name: "",
        description: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e, navigate) => {
        e.preventDefault();

        if (categoryId) {
            try {
                formData.start_up = formData.start_up || selectedStartup?.id;
                await updateCategoryService(categoryId, formData);
                showNotification("Categoría actualizada con éxito", "success");
                navigate('/product-list');
            } catch (err) {
                showNotification("Error al actualizar la categoría", "error");
            }
        } else {
            try {
                formData.start_up = formData.start_up || selectedStartup?.id;
                await registerCategoryService(formData);
                setFormData({
                    start_up: "",
                    name: "",
                    description: ""
                });
                navigate('/product-list');
                showNotification("Categoría creada con éxito", "success");

            } catch (err) {
                showNotification("Error al crear la categoría", "error");
            }
        }

    };

    return {
        formData,
        handleChange,
        handleSubmit,
        setFormData
    };
}

export default useRegisterCategory;
