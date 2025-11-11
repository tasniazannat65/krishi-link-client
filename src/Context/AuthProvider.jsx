import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const authInfo = {
        email: 'example@gmail.com'
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;