// src/app/routes/index.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/home/index';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export {App};