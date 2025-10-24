import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components
const AuthContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundColor: '#f5f5f0', // Light beige background
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

const BrandLogo = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ff6b35', // Orange color
  color: 'white',
  padding: theme.spacing(0.75, 2.5),
  borderRadius: theme.spacing(1),
  fontWeight: 600,
  fontSize: '1rem',
  letterSpacing: '1px',
  marginBottom: theme.spacing(2.5),
  boxShadow: 'none',
  width: 'fit-content',
}));

const AuthCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(3),
  width: '100%',
  maxWidth: 400,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
}));

const ConfirmButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff6b35',
  color: 'white',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  fontSize: '0.95rem',
  fontWeight: 600,
  textTransform: 'none',
  height: '48px',
  '&:hover': {
    backgroundColor: '#e55a2b',
  },
}));

const InfoAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  border: 'none',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  '& .MuiAlert-icon': {
    color: '#666',
    fontSize: '1.2rem',
  },
  '& .MuiAlert-message': {
    padding: 0,
  },
}));

const CodePassword = ({ onBackToLogin, onSwitchToNewPassword }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Code verification attempt:', { code });
    // Here you would typically verify the code
    alert('Code verified! Redirecting to new password form...');
    // Navigate to new password step
    onSwitchToNewPassword();
  };

  return (
    <AuthContainer>
      {/* Brand Logo */}
      <BrandLogo elevation={0}>
        LOGO
      </BrandLogo>

      {/* Main Code Verification Card */}
      <AuthCard elevation={0}>
        <CardContent sx={{ p: 0 }}>
          {/* Header */}
          <Box textAlign="center" mb={3}>
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ 
                fontWeight: 700, 
                color: '#333', 
                mb: 1,
                fontSize: '1.75rem'
              }}
            >
              Reset your password
            </Typography>
            <Typography 
              variant="body2" 
              color="#666" 
              sx={{ 
                fontSize: '0.9rem',
                lineHeight: 1.4
              }}
            >
              Enter your email address and we'll send you a link to reset your password.
            </Typography>
          </Box>

          {/* Information Alert */}
          <InfoAlert severity="info" icon={<Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>i</Typography>}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#333', mb: 0.5 }}>
              Check your email for a reset code
            </Typography>
            <Typography variant="body2" color="#666" sx={{ fontSize: '0.9rem' }}>
              You'll receive an email if an account associated with the email address exists
            </Typography>
          </InfoAlert>

          {/* Code Verification Form */}
          <Box component="form" onSubmit={handleSubmit}>
            {/* Code Field */}
            <Box mb={3}>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: '#333',
                  mb: 0.5,
                  textAlign: 'left'
                }}
              >
                Code
              </Typography>
              <TextField
                fullWidth
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="123456"
                required
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                    height: '48px',
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#ff6b35',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#ff6b35',
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    fontSize: '0.95rem',
                    padding: '12px 14px',
                  },
                }}
              />
            </Box>

            {/* Confirm Reset Code Button */}
            <ConfirmButton
              type="submit"
              fullWidth
              sx={{ mb: 2 }}
            >
              Confirm Reset Code
            </ConfirmButton>

            {/* Back to Sign In Link */}
            <Box textAlign="center">
              <Typography variant="body2" color="#666" sx={{ fontSize: '0.9rem' }}>
                Remember Your Password?{' '}
                <Link 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    onBackToLogin();
                  }}
                  sx={{ 
                    color: '#ff6b35', 
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  Sign In
                </Link>
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </AuthCard>
    </AuthContainer>
  );
};

export default CodePassword;
