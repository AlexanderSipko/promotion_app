
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet  } from 'react-router-dom';
import { HomePage } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { Content  } from '@/widgets/content';
import { Probability  } from '@/widgets/probability';
import { PhotoIvan  } from '@/widgets/photoIvan';
import { ToDo  } from '@/widgets/todo';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} >
                    <Route path="" element={<PhotoIvan />} />
                    <Route path="Probability" element={<Probability />} />
                    <Route path="todo" element={<ToDo />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export { AppRouter };

