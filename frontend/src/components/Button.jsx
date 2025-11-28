import React from 'react';


const Button = ({ type = 'primary', size = 'medium', disabled = false, children }) => {
    return (
        <button className="btn-primary" disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;

