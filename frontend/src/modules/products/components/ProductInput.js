import React, {useState} from "react";
import {FiUploadCloud} from "react-icons/fi";

const ProductInput = ({formData, handleChange, categories}) => {

    const [previewImage, setPreviewImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
            handleChange(event);
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-800">Nombre</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre del producto"
                    className="w-full p-3 border rounded-md bg-gray-50 text-gray-900"
                />
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-800">Categoría</label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md bg-white text-gray-900"
                >
                    <option value="">Seleccione una opción</option>
                    {categories.map((cat, i) => (
                        <option key={i} value={cat.name}>{cat.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-800">Precio</label>
                <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Precio"
                    className="w-full p-3 border rounded-md bg-gray-50 text-gray-900"
                />
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-800">Stock</label>
                <input
                    type="text"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    placeholder="Stock"
                    className="w-full p-3 border rounded-md bg-gray-50 text-gray-900"
                />
            </div>

            <div className="md:col-span-2">
                <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                    Descripción
                </label>
                <textarea
                    rows="5"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter your content"
                    id="content"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
            </div>

            <div className="md:col-span-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Imagen</label>
                <div
                    className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="imageUpload"
                    />
                    <label htmlFor="imageUpload" className="cursor-pointer flex flex-col items-center">
                        <FiUploadCloud className="text-blue-600 w-12 h-12 mb-4"/>

                        <span className="text-blue-600 font-semibold">
                            Sube una imagen o arrastra y suelta <u>aquí</u>
                        </span>
                        <span className="text-gray-400 text-sm mt-1">
                            Soporta: JPG, JPEG2000, PNG
                        </span>
                    </label>
                    {previewImage && (
                        <img
                            src={previewImage}
                            alt="Vista previa"
                            className="mt-4 w-40 h-40 object-cover rounded-md shadow-md"
                        />
                    )}
                </div>
            </div>

        </div>
    );
};

export default ProductInput;
