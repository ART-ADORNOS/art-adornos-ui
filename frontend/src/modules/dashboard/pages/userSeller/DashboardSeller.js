import React, {useContext, useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import AuthContext from '../../../../shared/providers/AuthContext';
import Navbar from '../../../../shared/components/layout/header/Navbar';
import AlertMessage from '../../../../shared/components/ui/Messages/AlertMessage';

const DashboardSeller = () => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [alert, setAlert] = useState({show: false, message: '', type: ''});

    useEffect(() => {
        if (location.state?.updateSuccess) {
            setAlert({
                show: true,
                message: location.state?.message,
                type: location.state?.messageType
            });

            navigate('', {replace: true, state: {}});

            setTimeout(() => setAlert(prev => ({...prev, show: false})), location.state?.messageDuration || 3000);
        }
    }, [location.state, navigate]);

    return (
        <div className="bg-zinc-100 dark:bg-gray-900 flex-auto text-gray-900 dark:text-white flex flex-col">
            <Navbar dashboardTyype="userSeller" />
            <div>
                {alert.show && (
                    <AlertMessage
                        message={alert.message}
                        type={alert.type}
                        onClose={() => setAlert(prev => ({...prev, show: false}))}
                    />
                )}
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center mt-6">
                    Bienvenido, <span className="text-blue-600">{user?.email}</span> 👋
                </h1>
                {user?.is_seller?
                    <h2 className="text-2xl text-center">Eres vendedor ✅</h2> :
                    <h2 className="text-2xl text-center">No eres vendedor ❌</h2>
                }
            </div>
        </div>
    );
};

export default DashboardSeller;