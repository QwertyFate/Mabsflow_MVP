import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/login';
import Signup from '../../components/signup';
import ResetPassword from '../../components/resetPassword';
import CodePassword from '../../components/codePassword';
import NewPassword from '../../components/newPassword';
import EmailConfirmation from '../../components/emailConfirmation';

const Authentication = () => {
  const [currentView, setCurrentView] = useState('login');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  const handleSwitchToSignup = () => {
    setCurrentView('signup');
  };

  const handleSwitchToLogin = () => {
    setCurrentView('login');
  };

  const handleSwitchToResetPassword = () => {
    setCurrentView('reset');
  };

  const handleSwitchToCodePassword = () => {
    setCurrentView('code');
  };

  const handleSwitchToNewPassword = () => {
    setCurrentView('newpassword');
  };

  const handleSwitchToEmailConfirmation = (email) => {
    setUserEmail(email);
    setCurrentView('emailconfirmation');
  };

  const handleLoginSuccess = () => {
    navigate('/dashboard');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'login':
        return (
          <Login 
            onSwitchToSignup={handleSwitchToSignup}
            onSwitchToResetPassword={handleSwitchToResetPassword}
            onLoginSuccess={handleLoginSuccess}
          />
        );
      case 'signup':
        return (
          <Signup 
            onSwitchToLogin={handleSwitchToLogin}
            onSwitchToEmailConfirmation={handleSwitchToEmailConfirmation}
          />
        );
      case 'reset':
        return (
          <ResetPassword 
            onBackToLogin={handleSwitchToLogin}
            onSwitchToCodePassword={handleSwitchToCodePassword}
          />
        );
      case 'code':
        return (
          <CodePassword 
            onBackToLogin={handleSwitchToLogin}
            onSwitchToNewPassword={handleSwitchToNewPassword}
          />
        );
      case 'newpassword':
        return <NewPassword onBackToLogin={handleSwitchToLogin} />;
      case 'emailconfirmation':
        return (
          <EmailConfirmation 
            email={userEmail}
            onBackToLogin={handleSwitchToLogin}
          />
        );
      default:
        return (
          <Login 
            onSwitchToSignup={handleSwitchToSignup}
            onSwitchToResetPassword={handleSwitchToResetPassword}
            onLoginSuccess={handleLoginSuccess}
          />
        );
    }
  };

  return renderCurrentView();
};

export default Authentication;
