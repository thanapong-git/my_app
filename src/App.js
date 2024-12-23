import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  const [page, setPage] = useState('home'); // เก็บสถานะของหน้าปัจจุบัน

  let content;
  switch (page) {
    case 'about':
      content = <About />;
      break;
    case 'courses':
      content = <Courses />;
      break;
    case 'contact':
      content = <Contact />;
      break;
    default:
      content = <Home />;
  }

  return (
    <div>
      <Header />
      <Navbar setPage={setPage} />
      <main>
        {content}
      </main>
      <Footer />
    </div>
  );
};

export default App;
