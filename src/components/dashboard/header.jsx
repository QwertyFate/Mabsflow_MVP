import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  IconButton,
  Avatar,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
} from '@mui/material';
import {
  Search,
  Notifications,
  Settings,
  Help,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Custom styled components
const HeaderContainer = styled(Box)(({ theme }) => ({
  height: '64px',
  backgroundColor: 'white',
  borderBottom: '1px solid #e0e0e0',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 3),
  justifyContent: 'space-between',
  position: 'fixed', // Add fixed positioning
  top: 0, // Stick to the top
  left: 0, // Start from the left edge
  right: 0, // Extend to the right edge
  zIndex: 2000, // Higher than sidebar's z-index
}));

const LeftSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const RightSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const LogoButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff6b35',
  color: 'white',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  minWidth: '40px',
  height: '40px',
  '&:hover': {
    backgroundColor: '#e55a2b',
  },
}));

const SearchField = styled(TextField)(({ theme }) => ({
  width: '300px',
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    height: '40px',
    backgroundColor: 'white',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ff6b35',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ff6b35',
    },
  },
  '& .MuiOutlinedInput-input': {
    fontSize: '0.9rem',
    padding: '8px 12px',
  },
}));

const RobotIcon = styled(Box)(({ theme }) => ({
  width: '32px',
  height: '32px',
  backgroundColor: '#f5f5f0',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
}));

const AlphaChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: '1px solid #ff6b35',
  color: '#333',
  borderRadius: theme.spacing(1),
  fontSize: '0.8rem',
  fontWeight: 500,
  height: '28px',
  '&:hover': {
    backgroundColor: '#fff0e6',
  },
}));

const ProjectSelect = styled(FormControl)(({ theme }) => ({
  minWidth: '180px',
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    height: '40px',
    backgroundColor: 'white',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ff6b35',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ff6b35',
    },
  },
  '& .MuiOutlinedInput-input': {
    fontSize: '0.9rem',
    padding: '8px 12px',
  },
}));

const HeaderIconButton = styled(IconButton)(({ theme }) => ({
  width: '40px',
  height: '40px',
  color: '#666',
  '&:hover': {
    backgroundColor: '#f5f5f0',
    color: '#ff6b35',
  },
}));

const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: '40px',
  height: '40px',
  border: '2px solid #e0e0e0',
  cursor: 'pointer',
  '&:hover': {
    borderColor: '#ff6b35',
  },
}));

// Custom Robot Icon Component
const RobotIconComponent = () => (
  <Box
    sx={{
      width: '24px',
      height: '24px',
      backgroundColor: '#f5f5f0',
      borderRadius: '4px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    }}
  >
    {/* Robot head */}
    <Box
      sx={{
        width: '16px',
        height: '12px',
        backgroundColor: 'white',
        borderRadius: '2px',
        border: '1px solid #e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2px',
      }}
    >
      {/* Eyes */}
      <Box
        sx={{
          width: '3px',
          height: '3px',
          backgroundColor: '#ff6b35',
          borderRadius: '50%',
        }}
      />
      <Box
        sx={{
          width: '3px',
          height: '3px',
          backgroundColor: '#ff6b35',
          borderRadius: '50%',
        }}
      />
    </Box>
    {/* Robot body */}
    <Box
      sx={{
        width: '20px',
        height: '8px',
        backgroundColor: 'white',
        borderRadius: '2px',
        border: '1px solid #e0e0e0',
        marginTop: '1px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Chest detail */}
      <Box
        sx={{
          width: '4px',
          height: '4px',
          backgroundColor: '#ff6b35',
          borderRadius: '50%',
        }}
      />
    </Box>
  </Box>
);

// Custom Cube Icon Component
const CubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <rect x="7" y="7" width="6" height="6" rx="1"/>
    <rect x="7" y="7" width="2" height="2" rx="0.5" fill="currentColor"/>
    <rect x="9" y="7" width="2" height="2" rx="0.5" fill="currentColor"/>
    <rect x="7" y="9" width="2" height="2" rx="0.5" fill="currentColor"/>
    <rect x="9" y="9" width="2" height="2" rx="0.5" fill="currentColor"/>
  </svg>
);

const Header = () => {
  const [selectedProject, setSelectedProject] = useState('Sample one Projects');

  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
  };

  return (
    <HeaderContainer>
      {/* Left Section */}
      <LeftSection>
        {/* Logo Button */}
        <LogoButton>
          LOGO
        </LogoButton>

        {/* Search Field */}
        <SearchField
          placeholder="Search"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search sx={{ color: '#666', fontSize: '20px' }} />
              </InputAdornment>
            ),
          }}
        />
      </LeftSection>

      {/* Right Section */}
      <RightSection>
        {/* Robot Icon */}
        <RobotIcon>
          <RobotIconComponent />
        </RobotIcon>

        {/* ALPHA AI Chip */}
        <AlphaChip label="ALPHA AI" />

        {/* Project Selector */}
        <ProjectSelect>
          <Select
            value={selectedProject}
            onChange={handleProjectChange}
            IconComponent={KeyboardArrowDown}
            startAdornment={
              <InputAdornment position="start">
                <CubeIcon />
              </InputAdornment>
            }
          >
            <MenuItem value="Sample one Projects">Sample one Projects</MenuItem>
            <MenuItem value="Sample two Projects">Sample two Projects</MenuItem>
            <MenuItem value="Sample three Projects">Sample three Projects</MenuItem>
          </Select>
        </ProjectSelect>

        {/* Notification Bell */}
        <HeaderIconButton>
          <Notifications />
        </HeaderIconButton>

        {/* Settings Gear */}
        <HeaderIconButton>
          <Settings />
        </HeaderIconButton>

        {/* Help Question Mark */}
        <HeaderIconButton>
          <Help />
        </HeaderIconButton>

        {/* User Avatar */}
        <UserAvatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
          alt="User Profile"
        />
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
