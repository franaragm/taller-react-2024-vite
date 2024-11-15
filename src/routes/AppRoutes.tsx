import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../components/Menu';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));

const AppRoutes: React.FC = () => (
  <Router>
    <Menu />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes;
