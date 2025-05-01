import Navbar from "../../../shared/components/layout/header/Navbar";
import React from "react";
import GoBackButton from "../../../shared/components/ui/Buttons/goBack";
import {useGetCart} from "../hooks/useGetCart";
import Loader from "../../../shared/components/ui/Loaders/Loader";

const CartOrdersList = () => {
    const {carts, loading} = useGetCart();
    console.log("Carts", carts);


    return (<div className="bg-zinc-100 dark:bg-gray-900 flex-auto text-gray-900 dark:text-white flex flex-col">
            <Navbar/>
            <div className="flex items-center justify-between w-full px-4 py-2">
                <GoBackButton redirectTo={"/dashboard"}/>
            </div>
            <div className="container mx-auto px-6 sm:px-12 py-12">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="text-center sm:text-left">
                        <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
                            Lista de Pedidos
                        </h1>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="flex items-center justify-center h-96 w-full">
                    <Loader/>
                </div>
            ) : (
                <div className="container mx-auto px-6 sm:px-12 pb-12">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto border-collapse">
                                <thead>
                                <tr className="border-b">
                                    <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">
                                        Productos
                                    </th>
                                    <th className="px-4 py-2 text-center font-semibold text-gray-700 dark:text-gray-300">
                                        Cantidad
                                    </th>
                                    <th className="px-4 py-2 text-center font-semibold text-gray-700 dark:text-gray-300">
                                        Precio
                                    </th>
                                    <th className="px-4 py-2 text-right font-semibold text-gray-700 dark:text-gray-300">
                                        Acción
                                    </th>
                                </tr>
                                </thead>

                                {carts.length > 0 ? (
                                    carts.map((cart) => (
                                        <tr key={cart.id}>
                                            <td className="px-4 py-4">
                                                <div className="flex items-center">
                                                    <img
                                                        src={cart.image_product}
                                                        alt="Furniture Set"
                                                        className="w-16 h-16 object-cover rounded mr-4"
                                                    />
                                                    <div>
                                                        <p className="font-semibold text-gray-800 dark:text-gray-200">
                                                            {cart.product}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                <div className="inline-flex items-center space-x-2">
                                                    <button
                                                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                                                        -
                                                    </button>
                                                    <span className="font-medium">{cart.quantity}</span>
                                                    <button
                                                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-center font-semibold text-gray-800 dark:text-gray-200">
                                                ${cart.price}
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                <button className="text-red-500 hover:text-red-700" title="Remove item">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 inline-block"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4"
                                                        />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://via.placeholder.com/60"
                                                    alt="Furniture Set"
                                                    className="w-16 h-16 object-cover rounded mr-4"
                                                />
                                                <div>
                                                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                                                        Furniture Set
                                                    </p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        Set: Colour Coffee
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <div className="inline-flex items-center space-x-2">
                                                <button
                                                    className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                                                    -
                                                </button>
                                                <span className="font-medium">4</span>
                                                <button
                                                    className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-right font-semibold text-gray-800 dark:text-gray-200">
                                            $437
                                        </td>
                                        <td className="px-4 py-4 text-right">
                                            <button className="text-red-500 hover:text-red-700" title="Remove item">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 inline-block"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4"
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </table>
                        </div>

                        <div className="flex justify-end mt-4">
                            <button
                                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
                                Update Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default CartOrdersList;