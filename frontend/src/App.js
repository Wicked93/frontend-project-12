import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import NotFoundPage from './components/NotFoundPage';

const App = () => (
  <div className="d-flex flex-column h-100">
    <Navbar className="shadow-sm navbar navbar-light">
      <Container className="container">
        <a className="navbar-brand" href="/">Hexlet Chat</a>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;