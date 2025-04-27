import {useNotification} from "../../../shared/providers/alertProvider";
import {useState} from "react";
import registerCartService from "../service/registerCartService";


const useRegisterCart = () => {
    const {showNotification} = useNotification();

    const [formData, setFormData] = useState({
        user: "",
        products: [],
        quantity: 0
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await registerCartService(formData);
            setFormData({
                user: "",
                products: [],
                quantity: 0
            });
            showNotification("Carrito creado con éxito", "success");

        } catch (err) {
            showNotification("Error al crear el carrito", "error");
        }
    };
    return {
        formData,
        handleChange,
        handleSubmit,
        setFormData
    };
}

export default useRegisterCart;