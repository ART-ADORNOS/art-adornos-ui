import {useState} from "react";
import registerCategoryService from "../services/registerCategoryService";
import {useNotification} from "../../../shared/providers/alertProvider";


const useRegisterCategory = () => {
    const { showNotification } = useNotification();

    const [formData, setFormData] = useState({
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
        try {
            await registerCategoryService(formData);
            setFormData({
                name: "",
                description: ""
            });
            navigate('/product-list');
            showNotification("Categoría creada con éxito", "success");

        } catch (err) {
            showNotification("Error al crear la categoría", "error");
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
    };
}

export default useRegisterCategory;
