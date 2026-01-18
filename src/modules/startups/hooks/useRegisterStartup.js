import {useContext, useState} from "react";
import AuthContext from "../../../shared/providers/AuthContext";
import registerStartupService from "../services/startupService";
import updateStartupService from "../services/updateStartupService";
import {useNotification} from "../../../shared/providers/alertProvider";
import ROUTES from "../../../core/routes/routes";
import useOrchestratedCommand from "../../../shared/hooks/useOrchestratedCommand";

const initialFormState = {
    name: "",
    description: "",
    industry: "",
    icon: "",
};

const useRegisterStartup = (startupId = null) => {
    const {user} = useContext(AuthContext);
    const {showNotification} = useNotification();

    const [formData, setFormData] = useState(initialFormState);

    const registerCommand = useOrchestratedCommand(
        registerStartupService,
        {
            onSuccess: () => {
                showNotification(
                    "Emprendimiento registrado exitosamente",
                    "success"
                );
            },
            onError: () => {
                showNotification(
                    "Error al registrar el emprendimiento",
                    "error"
                );
            },
        }
    );

    const updateCommand = useOrchestratedCommand(
        updateStartupService,
        {
            onSuccess: () => {
                showNotification(
                    "Emprendimiento actualizado exitosamente",
                    "success"
                );
            },
            onError: () => {
                showNotification(
                    "Error al actualizar el emprendimiento",
                    "error"
                );
            },
        }
    );

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e, navigate) => {
        e.preventDefault();

        const payload = {
            ...formData,
            owner: user?.id,
        };

        if (startupId) {
            await updateCommand.execute(startupId, payload);
        } else {
            await registerCommand.execute(payload);
            setFormData(initialFormState);
        }

        navigate(ROUTES.DASHBOARD_SELLER);
    };

    return {
        formData,
        setFormData,
        handleChange,
        handleSubmit,
        loading: registerCommand.loading || updateCommand.loading,
    };
};

export default useRegisterStartup;
