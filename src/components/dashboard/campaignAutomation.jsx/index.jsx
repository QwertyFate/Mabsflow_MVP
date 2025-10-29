import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add } from '@mui/icons-material';
import KPICards from './cards';
import QuickCampaign from './generateCampaign';
import CampaignList from './campaignList';
import SmartTimingEngine from './smartTimingEngine';

// Custom styled components
const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(3),
  backgroundColor: '#f5f5f0',
}));

const TextSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 700,
  color: '#333',
  marginBottom: theme.spacing(0.5),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.95rem',
  color: '#666',
  fontWeight: 400,
}));

const NewCampaignButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff6b35',
  color: 'white',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.2, 2.5),
  fontSize: '0.95rem',
  fontWeight: 600,
  textTransform: 'none',
  height: '44px',
  '&:hover': {
    backgroundColor: '#e55a2b',
  },
}));

const MainContentCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(2),
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  margin: theme.spacing(0, 3, 3, 3),
  overflow: 'hidden',
}));

const CampaignAutomation = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f0',
      }}
    >
      {/* Header Section */}
      <HeaderContainer>
        <TextSection>
          <MainTitle>Campaign Automation</MainTitle>
          <Subtitle>Build, monitor, and optimize your multi-channel campaigns.</Subtitle>
        </TextSection>
        <NewCampaignButton
          startIcon={<Add />}
        >
          New Campaign
        </NewCampaignButton>
      </HeaderContainer>

      {/* KPI Cards */}
      <KPICards />

      {/* Quick Campaign Form */}
      <QuickCampaign />

      {/* Campaign List - In white card container */}
      <MainContentCard>
        <CampaignList />
      </MainContentCard>

      {/* Smart Timing Engine */}
      <SmartTimingEngine />
    </Box>
  );
};

export default CampaignAutomation;
