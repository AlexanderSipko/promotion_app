
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet  } from 'react-router-dom';
import { HomePage } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { Content  } from '@/widgets/Content';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} >
                    <Route path="" element={<Content type={'default'} />} />
                    <Route path="info" element={<Content type={'info'} />} />
                    <Route path="todo" element={<Content type={'todo'} />} ></Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export { AppRouter };

