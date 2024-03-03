import React from 'react';


const LoginButton = () => {
    const handleLogin = () => {
        // Implement your login functionality here
        console.log('User clicked login button');
    };

    return (
        <button onClick={handleLogin}>
            Login
        </button>
    );
};

export default LoginButton;
