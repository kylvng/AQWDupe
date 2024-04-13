import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Create from './pages/Create';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Edit from './pages/Edit';
import './App.css';

function App() {
    return (
        <Router>
            <div className='whole-page'>
                <Sidebar />
                <div className='right-side-content'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/characters" element={<Characters />} />
                        <Route path="/characters/edit/:id" element={<Edit />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
