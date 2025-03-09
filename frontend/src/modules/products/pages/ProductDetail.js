import Navbar from "../../../shared/components/layout/header/Navbar";
import GoBackButton from "../../../shared/components/ui/Buttons/goBack";

const ProductDetail = () => {
    return (<div className="bg-zinc-100 dark:bg-gray-900 flex-auto text-gray-900 dark:text-white flex flex-col">
            <Navbar/>
            <div className="flex items-center justify-between w-full px-4 py-2">
                <GoBackButton redirectTo="/product-list"/>
            </div>

            <div className="flex-grow flex items-center justify-center p-4">
                <div
                    className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
                    <div className="bg-gray-200 dark:bg-gray-700 flex items-center justify-center p-8">
                        <span className="text-gray-500 dark:text-gray-400 text-6xl">📷</span>
                    </div>

                    <div className="p-8 flex flex-col justify-center">
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4 rounded-lg text-center w-3/4">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Electric Kettle</h1>
                        </div>

                        <p className="mt-20 text-gray-600 dark:text-gray-300">
                            Fishing a spout shaped like a jug to prevent water spills, the electric kettle quickly boils
                            water and automatically turns off to conserve power.
                        </p>

                        <div className="mt-4">
                            <span className="font-semibold">Color:</span>
                            <span className="text-gray-700 dark:text-gray-300"> White</span>
                        </div>

                        <div className="mt-6 flex justify-between">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">ADD TO
                                CART
                            </button>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">Find
                                A STORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default ProductDetail;