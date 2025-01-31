import React, {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import Register from "../register";
import {useNavigate} from "react-router-dom";


const UpdateProfile = () => {
    const {user, updateUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = async (formData) => {
        const updatedData = {...formData};
        const success = await updateUser(updatedData);

        if (success) {
            navigate('/dashboard', {
                state: {
                    updateSuccess: success,
                    message: success
                        ? 'Perfil actualizado con éxito'
                        : 'Error al actualizar el perfil',
                    messageType: success ? 'success' : 'error',
                    messageDuration: 3000
                }
            });

        }
    };

    return (
        <div className="bg-zinc-100 dark:bg-gray-900 flex-auto text-gray-900 dark:text-white flex flex-col">
            {user && (
                <Register
                    initialData={{
                        first_name: user.first_name || "",
                        last_name: user.last_name || "",
                        email: user.email || "",
                        username: user.username || "",
                    }}
                    onSubmit={handleUpdate}
                    isUpdateMode={true}
                />
            )}
        </div>
    );
};

export default UpdateProfile;
