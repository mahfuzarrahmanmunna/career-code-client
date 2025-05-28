import React from 'react';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoutes = ({ children }) => {
    return <AuthContext>
        {children}
    </AuthContext>
};

export default PrivateRoutes;