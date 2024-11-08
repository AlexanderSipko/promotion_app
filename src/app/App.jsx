
import React from 'react';
import {AppRouter} from '@/app/router'

const App = () => {
    return (
        <>
            <AppRouter/>
            <h1>it's backup branch</h1>
            <p>commit «old-release»</p>
            <TestFoo></TestFoo>
        </>
        
    );
};

export { App };


function TestFoo () {

    return <p>It's new foo</p>
}