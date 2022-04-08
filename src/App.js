import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './register/Register'
import Login from './login/Login';
import Welcome from './welcome/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
