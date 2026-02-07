import {useContext, useState} from "react";
import {StartupContext} from "../../startups/context/StartupProvider";
import {useNotification} from "../../../shared/providers/alertProvider";
import {useGetCategories} from "../../categories/hooks/useGetCategory";
import registerProductService from "../services/registerProductService";
import updateProductService from "../services/updateProductService";
import useMutationOrchestrator from "../../../shared/hooks/useMutationOrchestrator";
import ROUTES from "../../../core/routes/routes";

const initialFormState = {
    start_up: "",
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    image: null,
};

const useRegisterProduct = (productId = null) => {
    const {selectedStartup} = useContext(StartupContext);
    const {showNotification} = useNotification();
    const idST = localStorage.getItem("selectedStartupId");

    const {categories} = useGetCategories(selectedStartup?.id || idST);

    const [formData, setFormData] = useState(initialFormState);
    const [showAlert, setShowAlert] = useState(false);

    const closeAlert = () => setShowAlert(false);

    const productMutation = useMutationOrchestrator(
        async ({formData, categoryId}) => {
            const form = new FormData();

            form.append("start_up", idST);
            form.append("name", formData.name);
            form.append("description", formData.description);
            form.append("category", categoryId || "");
            form.append("price", formData.price);
            form.append("stock", formData.stock);

            if (formData.image instanceof File) {
                form.append("image", formData.image);
            }

            if (productId) {
                return updateProductService(productId, form);
            }

            return registerProductService(form);
        },
        {
            onSuccess: () => {
                showNotification(
                    productId
                        ? "Producto actualizado exitosamente"
                        : "Producto registrado exitosamente",
                    "success"
                );
            },
            onError: () => {
                showNotification(
                    productId
                        ? "Error al actualizar el producto"
                        : "Error al registrar el producto",
                    "error"
                );
            }
        }
    );

    const handleChange = (e) => {
        const {name, value, files} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: name === "image" ? files[0] : value,
        }));
    };

    const handleSubmit = async (e, navigate) => {
        e.preventDefault();

        if (!formData.image) {
            setShowAlert(true);
            return;
        }

        const categoryId = categories.find(
            (cat) => cat.name === formData.category
        )?.id;

        await productMutation.execute({formData, categoryId});

        setFormData(initialFormState);
        navigate(ROUTES.PRODUCT_LIST);
    };

    return {
        formData,
        setFormData,
        handleChange,
        handleSubmit,
        categories,
        showAlert,
        closeAlert,
        loading: productMutation.loading,
        error: productMutation.error,
    };
};

export default useRegisterProduct;
