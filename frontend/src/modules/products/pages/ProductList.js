import Navbar from "../../../shared/components/layout/header/Navbar";
import React, {useContext} from "react";
import GoBackButton from "../../../shared/components/ui/Buttons/goBack";
import {StartupContext} from "../../startup/context/StartupProvider";

const ProductList = () => {
    const {selectedStartup} = useContext(StartupContext);

    return (<div className="bg-zinc-100 dark:bg-gray-900 flex-auto text-gray-900 dark:text-white flex flex-col">
        <Navbar/>
        <GoBackButton redirectTo="/dashboard-seller"/>
        <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                <div className="text-center sm:text-left">
                    <h1 className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent animate-fade-in font-serif">
                        {selectedStartup?.name}
                    </h1>
                    <p className="mt-8 text-2xl sm:text-3xl text-gray-700 dark:text-gray-200 max-w-3xl leading-loose font-semibold animate-fade-in delay-300 font-serif">
                        {selectedStartup?.description}
                    </p>
                </div>
            </div>
        </div>
    </div>);
};

export default ProductList;