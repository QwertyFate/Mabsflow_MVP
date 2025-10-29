import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Stack,
  Alert,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Custom styled components
const GoogleLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

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

const GoogleButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  border: '1px solid #e0e0e0',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  color: '#333',
  textTransform: 'none',
  fontSize: '0.95rem',
  fontWeight: 400,
  height: '48px',
  '&:hover': {
    backgroundColor: '#fafafa',
    borderColor: '#ccc',
  },
}));

const SignupButton = styled(Button)(({ theme }) => ({
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

const CustomDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  '&::before, &::after': {
    borderColor: '#e0e0e0',
  },
  '& .MuiDivider-wrapper': {
    backgroundColor: 'white',
    padding: theme.spacing(0, 2),
    color: '#666',
    fontSize: '0.9rem',
    fontWeight: 500,
  },
}));

const InfoAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: '#f5f5f0', // Light beige background
  border: 'none',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  '& .MuiAlert-icon': {
    color: '#666',
    fontSize: '1.2rem',
    backgroundColor: '#666',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(1),
  },
  '& .MuiAlert-message': {
    padding: 0,
  },
}));

const Signup = ({ onSwitchToLogin, onSwitchToEmailConfirmation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [licenseToken, setLicenseToken] = useState(''); // Add this new state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup attempt:', { email, password, licenseToken }); // Include licenseToken
    // Navigate to email confirmation step
    onSwitchToEmailConfirmation(email);
  };

  const handleGoogleLogin = () => {
    console.log('Google signup attempt');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <AuthContainer>
      {/* Brand Logo */}
      <BrandLogo elevation={0}>
        LOGO
      </BrandLogo>

      {/* Main Authentication Card */}
      <AuthCard elevation={0}>
        <CardContent sx={{ p: 0 }}>
          {/* Header */}
          <Box textAlign="center" mb={2.5}>
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ 
                fontWeight: 700, 
                color: '#333', 
                mb: 0.5,
                fontSize: '1.75rem'
              }}
            >
              Create Account
            </Typography>
            <Typography variant="body2" color="#666" sx={{ fontSize: '0.9rem' }}>
              Already have an account?{' '}
              <Link 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  onSwitchToLogin();
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

          {/* Google Login Button */}
          <GoogleButton
            fullWidth
            startIcon={<GoogleLogo />}
            onClick={handleGoogleLogin}
            sx={{ mb: 2 }}
          >
            Continue with Google
          </GoogleButton>

          {/* Divider */}
          <CustomDivider>
            <Typography variant="body2">OR</Typography>
          </CustomDivider>

          {/* Signup Form */}
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              {/* Email Field */}
              <Box>
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
                  Email
                </Typography>
                <TextField
                  fullWidth
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
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

              {/* Password Field */}
              <Box>
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
                  Password
                </Typography>
                <TextField
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                          sx={{ color: '#666' }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
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

              {/* Confirm Password Field */}
              <Box>
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
                  Confirm Password
                </Typography>
                <TextField
                  fullWidth
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  required
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirm password visibility"
                          onClick={handleClickShowConfirmPassword}
                          edge="end"
                          sx={{ color: '#666' }}
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
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

              {/* Licensed Access Token Field */}
              <Box>
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
                  Licensed Access Token
                </Typography>
                <TextField
                  fullWidth
                  type="text"
                  value={licenseToken}
                  onChange={(e) => setLicenseToken(e.target.value)}
                  placeholder="Enter your license access token"
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

              {/* Signup Button */}
              <SignupButton
                type="submit"
                fullWidth
                sx={{ mt: 1 }}
              >
                Sign Up
              </SignupButton>
            </Stack>
          </Box>
        </CardContent>
      </AuthCard>
    </AuthContainer>
  );
};

export default Signup;
