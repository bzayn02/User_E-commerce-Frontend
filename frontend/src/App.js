import './App.css';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { PageNotFound } from './components/page-not-found/404PageNotFound';
import { EmailVerification } from './pages/email-verification/EmailVerification';
import { PrivateRoute } from './components/private-route/PrivateRoute';
import UserProfile from './pages/user-profile/UserProfile';
import PasswordReset from './pages/password-reset/PasswordReset';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/user-profile">
            <UserProfile />
          </PrivateRoute>

          <Route path="/user-registration" children={<Register />} />
          <Route path="/reset-password" children={<PasswordReset />} />
          <Route path="/email-verification" children={<EmailVerification />} />
          <Route exact path="/" children={<Login />} />
          <Route path="*" children={<PageNotFound />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
