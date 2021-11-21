import './App.css';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/user-registration" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
