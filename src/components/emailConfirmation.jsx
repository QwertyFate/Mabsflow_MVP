import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
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

const InfoAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: '#f5f5f0', // Light beige background
  border: 'none',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  '& .MuiAlert-icon': {
    marginRight: theme.spacing(1),
    marginTop: 0,
    padding: 0,
  },
  '& .MuiAlert-message': {
    padding: 0,
  },
}));

// Custom Info Icon Component
const InfoIcon = () => (
  <Box
    sx={{
      backgroundColor: '#333',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold',
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1,
    }}
  >
    i
  </Box>
);

const EmailConfirmation = ({ email, onBackToLogin }) => {
  return (
    <AuthContainer>
      {/* Brand Logo */}
      <BrandLogo elevation={0}>
        LOGO
      </BrandLogo>

      {/* Main Email Confirmation Card */}
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
              Verify your email address
            </Typography>
            <Typography 
              variant="body2" 
              color="#666" 
              sx={{ 
                fontSize: '0.9rem',
                lineHeight: 1.4
              }}
            >
              We sent an email to {email || 'sample@game.com'}
            </Typography>
          </Box>

          {/* Information Alert */}
          <InfoAlert 
            severity="info" 
            icon={<InfoIcon />}
          >
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#333', mb: 0.5 }}>
              Check your email to confirm
            </Typography>
            <Typography variant="body2" color="#666" sx={{ fontSize: '0.9rem' }}>
              You've successfully signed up. Please check your email to confirm your account before signing in to your dashboard.
            </Typography>
          </InfoAlert>

          {/* Back to Sign In Link */}
          <Box textAlign="center">
            <Typography variant="body2" color="#666" sx={{ fontSize: '0.9rem' }}>
              Already have an account?{' '}
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
        </CardContent>
      </AuthCard>
    </AuthContainer>
  );
};

export default EmailConfirmation;
