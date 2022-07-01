import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar";
import Home from './pages/HomePage'
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import CartPage from "./pages/CartPage";
import AboutPage from './pages/AboutPage'
import AddProductPage from "./pages/AddProductPage";

function App() {
  return(
      <div className="app">
          <nav className='navbar-container'><Navbar /></nav>
          <main className="main-content-container">
              <div>
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route exact path="/login" element={<LoginPage />} />
                      <Route exact path="/registration" element={<RegistrationPage />}/>
                      <Route exact path="/koszyk" element={<CartPage />}/>
                      <Route exact path="/about" element={<AboutPage />}/>
                      <Route exact path="/add-product" element={<AddProductPage />}/>
                  </Routes>

              </div>
          </main>

          <footer className="footer-container"></footer>

          <ToastContainer />
      </div>

  )}
export default App;