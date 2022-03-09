import { useSelector } from 'react-redux';

import PasswordResetForm from '../../components/password-reset-form/PasswordResetForm';
const PasswordReset = () => {
  const { showResetPasswordForm } = useSelector((state) => state.user);
  return (
    <div className="register-page mb-5">
      {showResetPasswordForm ? (
        'show password resetting form'
      ) : (
        <PasswordResetForm />
      )}
    </div>
  );
};
export default PasswordReset;
