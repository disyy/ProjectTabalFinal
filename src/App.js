import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarCom from './Components/NavBarCom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import RegistrationPage from './Components/RegistrationPage';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarCom/>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Registration" element={<RegistrationPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
