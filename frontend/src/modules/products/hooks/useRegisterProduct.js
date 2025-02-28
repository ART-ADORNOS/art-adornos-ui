import {useContext, useEffect, useState} from "react";
import registerProductService from "../services/productService";
import {StartupContext} from "../../startup/context/StartupProvider";
import {getCategory} from "../../category/services/getCategory";
import {useNotification} from "../../../shared/providers/alertProvider";


const useRegisterProduct = () => {
    const {selectedStartup} = useContext(StartupContext);
    const [categories, setCategories] = useState([]);
    const {showNotification} = useNotification();


    useEffect(() => {
        (async () => {
            try {
                const data = await getCategory();
                setCategories(data);
            } catch (error) {
                showNotification("Error al cargar la información de las categorías", "error");
            }
        })();
    }, []);

    const [formData, setFormData] = useState({
        start_up: "",
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
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
            if (formData.start_up === "") {
                formData.start_up = selectedStartup?.id;
            }
            await registerProductService(formData);
            setFormData({
                start_up: "",
                name: "",
                description: "",
                category: "",
                price: "",
                stock: "",
            });
            navigate('/product-list');
        } catch (err) {
            console.error(err);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        categories,
    };
}

export default useRegisterProduct;