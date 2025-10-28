import React from 'react';
import {
  Box,
  Card,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { TrendingUp } from '@mui/icons-material';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Add this to distribute content evenly
  height: '110px',
  width: '170px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  border: '1px solid #f0f0f0',
  flexShrink: 0,
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.85rem',
  color: '#666',
  fontWeight: 400,
  marginBottom: 0, // Remove margin since justifyContent handles spacing
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
}));

const ValueContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'baseline',
  gap: theme.spacing(1),
}));

const MainValue = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  color: '#333',
  lineHeight: 1,
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: '0.85rem',
  color: '#999',
  fontWeight: 400,
}));

const SmallSubText = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  color: '#666',
  fontWeight: 400,
}));

const TrendIndicator = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  color: '#4caf50',
  marginTop: theme.spacing(1),
}));

const TrendText = styled(Typography)(({ theme }) => ({
  fontSize: '0.85rem',
  color: '#4caf50',
  fontWeight: 500,
}));

// Individual Card Components
export const ActiveCampaignsCard = ({ value = "4" }) => {
  return (
    <StyledCard>
      <CardTitle>Active Campaigns</CardTitle>
      <ValueContainer>
        <MainValue>{value}</MainValue>
        <SubText>Active</SubText>
      </ValueContainer>
    </StyledCard>
  );
};

export const AvgOpenRateCard = ({ value = "61%" }) => {
  return (
    <StyledCard>
      <CardTitle>Avg. Open Rate</CardTitle>
      <MainValue>{value}</MainValue>
    </StyledCard>
  );
};

export const AvgCTRCard = ({ value = "14.3%" }) => {
  return (
    <StyledCard>
      <CardTitle>Avg. CTR</CardTitle>
      <MainValue>{value}</MainValue>
    </StyledCard>
  );
};

export const AvgResponseRateCard = ({ value = "8.9%", trend = "+6%" }) => {
  return (
    <StyledCard>
      <CardTitle>
        Avg. Response Rate <SmallSubText component="span">(24h)</SmallSubText>
      </CardTitle>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <MainValue>{value}</MainValue>
        <TrendIndicator sx={{ marginTop: 'auto' }}>
          <TrendingUp sx={{ fontSize: '18px' }} />
          <TrendText>{trend}</TrendText>
        </TrendIndicator>
      </Box>
    </StyledCard>
  );
};

export const AutomationsRunningCard = ({ value = "24" }) => {
  return (
    <StyledCard>
      <CardTitle>Automations Running</CardTitle>
      <ValueContainer>
        <MainValue>{value}</MainValue>
        <SubText>Triggers active</SubText>
      </ValueContainer>
    </StyledCard>
  );
};

// Main Cards Component
const KPICards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 0, // No gap between cards
        padding: 3,
        maxWidth: '1200px', // Total width
      }}
    >
      <ActiveCampaignsCard value="4" />
      <AvgOpenRateCard value="61%" />
      <AvgCTRCard value="14.3%" />
      <AvgResponseRateCard value="8.9%" trend="+6%" />
      <AutomationsRunningCard value="24" />
    </Box>
  );
};

export default KPICards;
