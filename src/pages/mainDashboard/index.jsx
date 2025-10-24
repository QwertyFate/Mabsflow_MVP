import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/dashboard/sidebar';
import Header from '../../components/dashboard/header';

// Custom styled components
const DashboardContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#f5f5f0', // Light beige background
  display: 'flex',
  flexDirection: 'column',
}));

const MainContentArea = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
}));

const ContentArea = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const BrandLogo = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ff6b35', // Orange color
  color: 'white',
  padding: theme.spacing(0.75, 2.5),
  borderRadius: theme.spacing(1),
  fontWeight: 600,
  fontSize: '1rem',
  letterSpacing: '1px',
  marginBottom: theme.spacing(3),
  boxShadow: 'none',
  width: 'fit-content',
}));

const MainDashboard = () => {
  const navigate = useNavigate();
  const [activeSidebarItem, setActiveSidebarItem] = useState('data-profiles');

  const handleSidebarItemClick = (itemId) => {
    setActiveSidebarItem(itemId);
    console.log('Sidebar item clicked:', itemId);
  };

  const handleBackToProjects = () => {
    navigate('/dashboard');
  };

  const handleLogout = () => {
    navigate('/auth');
  };

  return (
    <DashboardContainer>
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <MainContentArea>
        {/* Sidebar */}
        <Sidebar 
          activeItem={activeSidebarItem}
          onItemClick={handleSidebarItemClick}
        />

        {/* Main Content */}
        <ContentArea>
          {/* Brand Logo - Centered at top */}
          <BrandLogo elevation={0}>
            LOGO
          </BrandLogo>

          {/* Optional: Add a logout button */}
          <Box position="absolute" top={80} right={16}>
            <Button 
              onClick={handleLogout}
              sx={{ color: '#666', textTransform: 'none' }}
            >
              Logout
            </Button>
          </Box>

          {/* Main Content */}
          <Box display="flex" flexDirection="column" alignItems="center" maxWidth="800px" width="100%">
            {/* Header */}
            <Box textAlign="center" mb={4}>
              <Typography 
                variant="h3" 
                component="h1" 
                sx={{ 
                  fontWeight: 700, 
                  color: '#333', 
                  mb: 1,
                  fontSize: '2rem'
                }}
              >
                Main Dashboard
              </Typography>
              <Typography 
                variant="body1" 
                color="#666" 
                sx={{ 
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  maxWidth: '500px'
                }}
              >
                Welcome to your project workspace. Here you can manage your campaigns, leads, and automation.
              </Typography>
            </Box>

            {/* Back to Projects Button */}
            <Box mb={4}>
              <Button 
                onClick={handleBackToProjects}
                sx={{ 
                  color: '#ff6b35', 
                  textTransform: 'none',
                  fontWeight: 500
                }}
              >
                ← Back to Projects
              </Button>
            </Box>

            {/* Placeholder content */}
            <Box 
              sx={{ 
                backgroundColor: 'white',
                borderRadius: 2,
                padding: 4,
                width: '100%',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
              }}
            >
              <Typography variant="h6" color="#666" mb={2}>
                Dashboard Content Coming Soon
              </Typography>
              <Typography variant="body2" color="#999">
                This is where your main dashboard content will be displayed.
              </Typography>
            </Box>
          </Box>
        </ContentArea>
      </MainContentArea>
    </DashboardContainer>
  );
};

export default MainDashboard;
