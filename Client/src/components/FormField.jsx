import React from "react";

const FormField = ({
  label,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex item-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="bg-[#ECECF1] text-cs font-semibold py-1 px-2 rounded-[4px] text-black"
          >
            Surpreende-me!
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-[#46449ff] focus:border-[#46449ff] outline-none p-3 block w-full shadow-sm sm:text-sm border rounded-lg"
      />
    </div>
  );
};

export default FormField;
