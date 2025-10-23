import React, { useState } from 'react';
import Login from '../components/login';
import Signup from '../components/signup';
import ResetPassword from '../components/resetPassword';
import CodePassword from '../components/codePassword';

const Authentication = () => {
  const [currentView, setCurrentView] = useState('login');

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

  const renderCurrentView = () => {
    switch (currentView) {
      case 'login':
        return (
          <Login 
            onSwitchToSignup={handleSwitchToSignup}
            onSwitchToResetPassword={handleSwitchToResetPassword}
          />
        );
      case 'signup':
        return <Signup onSwitchToLogin={handleSwitchToLogin} />;
      case 'reset':
        return (
          <ResetPassword 
            onBackToLogin={handleSwitchToLogin}
            onSwitchToCodePassword={handleSwitchToCodePassword}
          />
        );
      case 'code':
        return <CodePassword onBackToLogin={handleSwitchToLogin} />;
      default:
        return (
          <Login 
            onSwitchToSignup={handleSwitchToSignup}
            onSwitchToResetPassword={handleSwitchToResetPassword}
          />
        );
    }
  };

  return renderCurrentView();
};

export default Authentication;
