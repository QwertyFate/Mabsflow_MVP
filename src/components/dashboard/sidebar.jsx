import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components
const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '231px', // Fixed width
  height: '100vh',
  backgroundColor: '#ffffff', // white background
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  borderRight: '1px solid #e0e0e0', // Subtle vertical border line
}));

const SidebarItem = styled(ListItemButton)(({ theme, active }) => ({
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(0.5),
  backgroundColor: active ? '#ff6b35' : 'transparent',
  color: active ? 'white' : '#333',
  '&:hover': {
    backgroundColor: active ? '#e55a2b' : '#e8e8e8',
  },
  padding: theme.spacing(1.5, 2),
}));

const SidebarIcon = styled(Box)(({ theme, active }) => ({
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  color: active ? 'white' : '#333',
}));

// Custom icons as SVG components matching the exact design
const ControlCenterIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "white" : "currentColor"} strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke={active ? "white" : "currentColor"} fill="none"/>
    <rect x="6" y="6" width="6" height="6" rx="1" stroke={active ? "white" : "currentColor"} fill="none"/>
    <rect x="6" y="6" width="2" height="2" rx="0.5" fill={active ? "white" : "currentColor"}/>
    <rect x="8" y="6" width="2" height="2" rx="0.5" fill={active ? "white" : "currentColor"}/>
    <rect x="6" y="8" width="2" height="2" rx="0.5" fill={active ? "white" : "currentColor"}/>
    <rect x="8" y="8" width="2" height="2" rx="0.5" fill={active ? "white" : "currentColor"}/>
    <rect x="12" y="6" width="6" height="6" rx="1" stroke={active ? "white" : "currentColor"} fill="none"/>
    <rect x="12" y="6" width="2" height="2" rx="0.5" fill={active ? "white" : "currentColor"}/>
    <rect x="14" y="6" width="2" height="2" rx="0.5" fill={active ? "white" : "currentColor"}/>
    <rect x="12" y="8" width="2" height="2" rx="0.5" fill={active ? "white" : "currentColor"}/>
    <rect x="14" y="8" width="2" height="2" rx="0.5" fill={active ? "white" : "currentColor"}/>
  </svg>
);

const DataProfilesIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "white" : "currentColor"} strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke={active ? "white" : "currentColor"} fill="none"/>
    <rect x="6" y="6" width="5" height="4" rx="1" stroke={active ? "white" : "currentColor"} fill="none"/>
    <rect x="6" y="12" width="5" height="4" rx="1" stroke={active ? "white" : "currentColor"} fill="none"/>
    <rect x="13" y="6" width="5" height="4" rx="1" stroke={active ? "white" : "currentColor"} fill="none"/>
    <rect x="13" y="12" width="5" height="4" rx="1" stroke={active ? "white" : "currentColor"} fill="none"/>
    <line x1="11" y1="6" x2="11" y2="16" stroke={active ? "white" : "currentColor"} strokeWidth="1"/>
  </svg>
);

const CampaignAutomationIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "white" : "currentColor"} strokeWidth="1.5">
    <line x1="12" y1="2" x2="12" y2="8" stroke={active ? "white" : "currentColor"}/>
    <line x1="8" y1="8" x2="16" y2="8" stroke={active ? "white" : "currentColor"}/>
    <circle cx="8" cy="8" r="2" stroke={active ? "white" : "currentColor"} fill="none"/>
    <circle cx="16" cy="8" r="2" stroke={active ? "white" : "currentColor"} fill="none"/>
    <line x1="8" y1="10" x2="8" y2="14" stroke={active ? "white" : "currentColor"}/>
    <line x1="16" y1="10" x2="16" y2="14" stroke={active ? "white" : "currentColor"}/>
    <line x1="6" y1="14" x2="18" y2="14" stroke={active ? "white" : "currentColor"}/>
    <circle cx="6" cy="14" r="2" stroke={active ? "white" : "currentColor"} fill="none"/>
    <circle cx="18" cy="14" r="2" stroke={active ? "white" : "currentColor"} fill="none"/>
  </svg>
);

const PerformanceMonitorIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "white" : "currentColor"} strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke={active ? "white" : "currentColor"} fill="none"/>
    <path d="M7 12c0-1.5 1.5-3 3-3s3 1.5 3 3c0 1.5-1.5 3-3 3s-3-1.5-3-3z" stroke={active ? "white" : "currentColor"} fill="none"/>
    <path d="M13 9c0-1.5 1.5-3 3-3s3 1.5 3 3c0 1.5-1.5 3-3 3s-3-1.5-3-3z" stroke={active ? "white" : "currentColor"} fill="none"/>
    <path d="M7 12l3-3 3 3 4-4" stroke={active ? "white" : "currentColor"} fill="none"/>
  </svg>
);

const SystemSettingsIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "white" : "currentColor"} strokeWidth="1.5">
    <circle cx="12" cy="12" r="3" stroke={active ? "white" : "currentColor"} fill="none"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const Sidebar = ({ activeItem, onItemClick }) => {
  const menuItems = [
    {
      id: 'control-center',
      label: 'Control Center',
      icon: ControlCenterIcon,
    },
    {
      id: 'data-profiles',
      label: 'Data & Profiles',
      icon: DataProfilesIcon,
    },
    {
      id: 'campaign-automation',
      label: 'Campaign Automation',
      icon: CampaignAutomationIcon,
    },
    {
      id: 'performance-monitor',
      label: 'Performance Monitor',
      icon: PerformanceMonitorIcon,
    },
    {
      id: 'system-settings',
      label: 'System Settings',
      icon: SystemSettingsIcon,
    },
  ];

  return (
    <SidebarContainer>
      <Box flex={1}>
        <List sx={{ padding: 0 }}>
          {menuItems.map((item) => {
            const isActive = activeItem === item.id;
            const IconComponent = item.icon;
            
            return (
              <ListItem key={item.id} disablePadding>
                <SidebarItem
                  active={isActive}
                  onClick={() => onItemClick && onItemClick(item.id)}
                >
                  <SidebarIcon active={isActive}>
                    <IconComponent active={isActive} />
                  </SidebarIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          fontSize: '14px',
                          textDecoration: item.hasUnderline ? 'underline' : 'none',
                          textDecorationColor: '#9c27b0',
                          textDecorationThickness: '1px',
                          color: isActive ? 'white' : '#333',
                        }}
                      >
                        {item.label}
                      </Typography>
                    }
                  />
                </SidebarItem>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </SidebarContainer>
  );
};

export default Sidebar;
