// filepath: /C:/Blog/Blog-FrontEnd/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Books from './Pages/Books';
import One_Book from './Pages/One_Book';
// import Service from './Pages/Service';
// import AboutUs from './Pages/AboutUs';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<One_Book key={location.pathname} />} />

          {/* <Route path="/service" element={<Service />} />
        <Route path="/about-us" element={<AboutUs />} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;