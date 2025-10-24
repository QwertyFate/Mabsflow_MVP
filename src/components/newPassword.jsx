import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  CheckCircle,
  RadioButtonUnchecked,
} from '@mui/icons-material';
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

const SaveButton = styled(Button)(({ theme }) => ({
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

const RequirementItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0.25, 0),
  minHeight: 'auto',
}));

const NewPassword = ({ onBackToLogin }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password requirements validation
  const requirements = {
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[!?<>@#$%]/.test(password),
    length: password.length >= 8,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!Object.values(requirements).every(req => req)) {
      alert('Please meet all password requirements!');
      return;
    }

    console.log('New password set:', { password });
    alert('Password updated successfully!');
    onBackToLogin();
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

      {/* Main New Password Card */}
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
              Change your password
            </Typography>
            <Typography 
              variant="body2" 
              color="#666" 
              sx={{ 
                fontSize: '0.9rem',
                lineHeight: 1.4
              }}
            >
              Welcome back! Choose a new strong password and save it to proceed
            </Typography>
          </Box>

          {/* New Password Form */}
          <Box component="form" onSubmit={handleSubmit}>
            {/* Password Field */}
            <Box mb={2}>
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
                placeholder="Enter new password"
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
            <Box mb={2}>
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
                placeholder="Confirm new password"
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

            {/* Password Requirements */}
            <Box mb={3}>
              <List dense sx={{ py: 0 }}>
                <RequirementItem>
                  <ListItemIcon sx={{ minWidth: '24px' }}>
                    {requirements.uppercase ? (
                      <CheckCircle sx={{ color: '#4caf50', fontSize: '16px' }} />
                    ) : (
                      <RadioButtonUnchecked sx={{ color: '#666', fontSize: '16px' }} />
                    )}
                  </ListItemIcon>
                  <ListItemText 
                    primary="Uppercase letters" 
                    sx={{ 
                      '& .MuiListItemText-primary': { 
                        fontSize: '0.85rem',
                        color: requirements.uppercase ? '#4caf50' : '#666'
                      } 
                    }} 
                  />
                </RequirementItem>
                
                <RequirementItem>
                  <ListItemIcon sx={{ minWidth: '24px' }}>
                    {requirements.lowercase ? (
                      <CheckCircle sx={{ color: '#4caf50', fontSize: '16px' }} />
                    ) : (
                      <RadioButtonUnchecked sx={{ color: '#666', fontSize: '16px' }} />
                    )}
                  </ListItemIcon>
                  <ListItemText 
                    primary="Lowercase letters" 
                    sx={{ 
                      '& .MuiListItemText-primary': { 
                        fontSize: '0.85rem',
                        color: requirements.lowercase ? '#4caf50' : '#666'
                      } 
                    }} 
                  />
                </RequirementItem>
                
                <RequirementItem>
                  <ListItemIcon sx={{ minWidth: '24px' }}>
                    {requirements.number ? (
                      <CheckCircle sx={{ color: '#4caf50', fontSize: '16px' }} />
                    ) : (
                      <RadioButtonUnchecked sx={{ color: '#666', fontSize: '16px' }} />
                    )}
                  </ListItemIcon>
                  <ListItemText 
                    primary="Number" 
                    sx={{ 
                      '& .MuiListItemText-primary': { 
                        fontSize: '0.85rem',
                        color: requirements.number ? '#4caf50' : '#666'
                      } 
                    }} 
                  />
                </RequirementItem>
                
                <RequirementItem>
                  <ListItemIcon sx={{ minWidth: '24px' }}>
                    {requirements.special ? (
                      <CheckCircle sx={{ color: '#4caf50', fontSize: '16px' }} />
                    ) : (
                      <RadioButtonUnchecked sx={{ color: '#666', fontSize: '16px' }} />
                    )}
                  </ListItemIcon>
                  <ListItemText 
                    primary="Special character (e.g. !?<>@#$%)" 
                    sx={{ 
                      '& .MuiListItemText-primary': { 
                        fontSize: '0.85rem',
                        color: requirements.special ? '#4caf50' : '#666'
                      } 
                    }} 
                  />
                </RequirementItem>
                
                <RequirementItem>
                  <ListItemIcon sx={{ minWidth: '24px' }}>
                    {requirements.length ? (
                      <CheckCircle sx={{ color: '#4caf50', fontSize: '16px' }} />
                    ) : (
                      <RadioButtonUnchecked sx={{ color: '#666', fontSize: '16px' }} />
                    )}
                  </ListItemIcon>
                  <ListItemText 
                    primary="8 characters or more" 
                    sx={{ 
                      '& .MuiListItemText-primary': { 
                        fontSize: '0.85rem',
                        color: requirements.length ? '#4caf50' : '#666'
                      } 
                    }} 
                  />
                </RequirementItem>
              </List>
            </Box>

            {/* Save New Password Button */}
            <SaveButton
              type="submit"
              fullWidth
            >
              Save New Password
            </SaveButton>
          </Box>
        </CardContent>
      </AuthCard>
    </AuthContainer>
  );
};

export default NewPassword;
