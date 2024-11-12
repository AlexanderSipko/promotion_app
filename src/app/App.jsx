
import React from 'react';
import {AppRouter} from '@/app/router'

const App = () => {
    return (
        <>
            <AppRouter/>
            <TestFoo></TestFoo>
        </>
        
    );
};

export { App };


function TestFoo () {

    return <hr/>
}