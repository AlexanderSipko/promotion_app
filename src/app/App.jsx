
import React from 'react';
import {AppRouter} from '@/app/router'

const App = () => {
    return (
        <>
            <AppRouter/>
            <h1>it's backup branch</h1>
            <p>commit «old-release»</p>
        </>
        
    );
};

export { App };