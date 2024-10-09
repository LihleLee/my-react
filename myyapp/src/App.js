import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './Pages/userContext';
import Header from './Components/header';
import Home from './Components/Home';
import About from './Components/About';
import UserProfile from './Pages/userProfile';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profile" element={<UserProfile />} />
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;

