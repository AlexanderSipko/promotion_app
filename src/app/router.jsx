
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet  } from 'react-router-dom';
import { HomePage } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { Content  } from '@/widgets/content';
import { Probability  } from '@/widgets/probability';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} >
                    <Route path="" element={<Content />} />
                    <Route path="Probability" element={<Probability />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export { AppRouter };

