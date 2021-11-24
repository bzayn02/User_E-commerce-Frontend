import './App.css';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
} from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { PageNotFound } from './components/page-not-found/404PageNotFound';
import { EmailVerification } from './pages/email-verification/EmailVerification';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/user-registration" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route exact path="/" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
