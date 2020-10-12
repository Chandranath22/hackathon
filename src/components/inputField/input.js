import React from 'react';
import './input.scss';

const Input = ({ type, label, placeholder, setValue }) => {
    return (
        <div className="input-layout">
            <h5 className="input-label">{label}</h5>
            <input
                type={type}
                className="input-field"
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

export default Input;