// import { HashRouter, Route, Routes } from 'react-router-dom';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './MyComponents/About';
import Category from './MyComponents/Category';
import Contact from './MyComponents/Contact';
import Easyandfast from './MyComponents/Easyandfast';
import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import Navbar from './MyComponents/Navbar';
import Topselling from './MyComponents/Topselling';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route index element={<Header />} />
        <Route path="category" element={<Category />} />
        <Route path="topselling" element={<Topselling />} />
        <Route path="easyandfast" element={<Easyandfast />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    {/* <Navbar/> */}
    {/* <Header /> */}
    {/* <Category /> */}
    {/* <Topselling /> */}
    {/* <Easyandfast /> */}
  </>
  );
}

export default App;
