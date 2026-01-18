import React from "react";

const CheckboxField = ({name, value = false, onChange, label, error = false, errorMessage = "", disabled = false}) => (
    <div className="flex flex-col gap-1">
        <label
            htmlFor={name}
            className={`flex items-center gap-2 text-sm ${
                disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer text-gray-700"
            }`}
        >
            <input
                id={name}
                name={name}
                type="checkbox"
                checked={value}
                onChange={onChange}
                disabled={disabled}
                className="h-4 w-4 rounded border-gray-300 accent-orange-600 focus:ring-2 focus:ring-orange-500"
            />
            <span className="text-gray-600">{label}</span>
        </label>

        {error && errorMessage && <p className="text-xs text-red-600">{errorMessage}</p>}
    </div>
);

export default CheckboxField;
