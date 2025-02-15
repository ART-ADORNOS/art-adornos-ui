import Navbar from "../../../../shared/components/layout/header/Navbar";
import GoBackButton from "../../../../shared/components/ui/Buttons/goBack";
import React from "react";


const RegisterStartup = () => {

    return (
        <div className="bg-zinc-100 dark:bg-gray-900 flex-auto text-gray-900 dark:text-white flex flex-col">
            <Navbar/>
            <GoBackButton redirectTo="/dashboard-seller"/>
            <section className="text-center my-2 mx-8 flex-auto">
                <h1 className="text-5xl font-extrabold">Registro de Emprendimiento</h1>
            </section>

        </div>
    );
}
export default RegisterStartup;