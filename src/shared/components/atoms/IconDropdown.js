import React, {useState} from "react";
import {FiChevronDown} from "react-icons/fi";

const IconDropdown = ({label, name, value, onChange, options = []}) => {
    const [show, setShow] = useState(false);

    const selectedOption = options.find(opt => opt.value === value);

    const handleSelect = (selectedValue) => {
        onChange({
            target: {
                name,
                value: selectedValue
            }
        });
        setShow(false);
    };

    return (
        <div className="mb-4 relative z-20 overflow-visible">
            <label className="block mb-2 text-sm font-medium text-gray-900">
                {label}
            </label>

            <button
                type="button"
                className="flex w-full items-center justify-between p-2 border rounded-md bg-white shadow-sm"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShow(prev => !prev);
                }}
            >
                <span className="flex items-center gap-2 text-gray-700">
                    {selectedOption?.icon}
                    {selectedOption?.label || "Seleccione un icono"}
                </span>
                <FiChevronDown size={20} className="text-gray-400"/>
            </button>

            {show && (
                <div
                    className="absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            type="button"
                            className="flex w-full items-center gap-2 p-2 hover:bg-gray-100 text-left"
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.icon}
                            <span className="text-gray-700">
                                {option.label}
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default IconDropdown;
