import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../../../shared/providers/AuthContext';
import Navbar from '../../../../shared/components/layout/header/Navbar';
import { useNotification } from "../../../../shared/providers/alertProvider";
import AddButton from "../../components/buttons/AddButton";
import { getStartup } from "../../services/startup/startupGet";

const DashboardSeller = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [startupData, setStartupData] = useState([]);
    const { showNotification } = useNotification();

    useEffect(() => {
        if (location.state?.updateSuccess) {
            showNotification("Perfil actualizado con éxito", "success");
            navigate('', { replace: true, state: {} });
        }

        const fetchStartup = async () => {
            try {
                const data = await getStartup();
                setStartupData(data);
            } catch (error) {
                showNotification("Error al cargar la información de la startup", "error");
            }
        };
        fetchStartup();
    }, [location.state, navigate, showNotification]);

    return (
        <div className="bg-zinc-100 dark:bg-gray-900 flex-auto text-gray-900 dark:text-white flex flex-col">
            <Navbar dashboardTyype="userSeller" />
            <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-4 sm:mb-0">
                    ¡Bienvenido, <span className="text-blue-600">{user?.username}</span>! 👋
                </div>
                <AddButton redirectTo="/register-startup" title="Emprendimiento" />
            </div>
            {startupData.length > 0 ? (
                <div>
                    {startupData.map((startup, index) => (
                        <div key={index}>
                            <p>{startup.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No se encontraron startups.</p>
            )}
        </div>
    );
};

export default DashboardSeller;
