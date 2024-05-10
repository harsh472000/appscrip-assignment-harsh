import React from 'react';
import '../../styles/common/input.css'

const Input = ({ placeholder, value, type = "text", className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            className={`custom-input ${className}`}
        />
    );
};

export default Input;
