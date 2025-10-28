import React, { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  Button,
  Chip,
  IconButton,
  Badge,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  MoreVert,
  MarkEmailRead,
  FiberManualRecord,
} from '@mui/icons-material';

// Styled components
const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'white',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 700,
  color: '#333',
  marginBottom: theme.spacing(3),
}));

const FilterTabs = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));

const FilterTab = styled(Button)(({ theme, active }) => ({
  backgroundColor: active ? '#333' : 'transparent',
  color: active ? 'white' : '#999',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.9rem',
  '&:hover': {
    backgroundColor: active ? '#333' : '#e8e8e8',
  },
}));

const CampaignCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(2.5),
  marginBottom: theme.spacing(2),
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
}));

const LeftSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  flex: 1,
  minWidth: '250px',
}));

const CampaignTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#333',
}));

const StatusChip = styled(Chip)(({ theme }) => ({
  backgroundColor: '#e8f5e9',
  color: '#2e7d32',
  height: '24px',
  fontSize: '0.85rem',
  fontWeight: 500,
  '& .MuiChip-icon': {
    color: '#4caf50',
  },
}));

const DateText = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: '#999',
  fontWeight: 400,
}));

const ChannelChip = styled(Chip)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  color: '#666',
  height: '28px',
  fontSize: '0.85rem',
  fontWeight: 500,
  border: '1px solid #e0e0e0',
  '& .MuiChip-icon': {
    color: '#999',
    fontSize: '16px',
  },
}));

const RightSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  flex: 1,
}));

const KPIsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(3),
  flex: 1,
  alignItems: 'center',
}));

const KPICell = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
}));

const KPILabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.85rem',
  color: '#999',
  fontWeight: 400,
}));

const KPIValue = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#333',
  lineHeight: 1,
  minWidth: '80px', // Fixed width to prevent wobbling
  textAlign: 'left', // Align all values to the left
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const PauseButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  color: '#666',
  border: '1px solid #ddd',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(0.75, 2),
  fontSize: '0.9rem',
  fontWeight: 500,
  textTransform: 'none',
  minWidth: '80px',
  '&:hover': {
    backgroundColor: '#e8e8e8',
    borderColor: '#ccc',
  },
}));

const CampaignList = () => {
  const [activeTab, setActiveTab] = useState('active');

  const campaigns = [
    {
      id: 1,
      name: 'Fintech Outreach 2025',
      status: 'active',
      launchDate: 'January 15, 2025',
      channel: 'Email',
      leads: '1,020',
      ctr: '15.8%',
      openRate: '63%',
      conversions: '15%',
    },
    {
      id: 2,
      name: 'Fintech Outreach 2025',
      status: 'active',
      launchDate: 'January 15, 2025',
      channel: 'Email',
      leads: '1,020',
      ctr: '15.8%',
      openRate: '63%',
      conversions: '15%',
    },
    {
      id: 3,
      name: 'Fintech Outreach 2025',
      status: 'active',
      launchDate: 'January 15, 2025',
      channel: 'Email',
      leads: '1,020',
      ctr: '15.8%',
      openRate: '63%',
      conversions: '15%',
    },
    {
      id: 4,
      name: 'Fintech Outreach 2025',
      status: 'active',
      launchDate: 'January 15, 2025',
      channel: 'Email',
      leads: '1,020',
      ctr: '15.8%',
      openRate: '63%',
      conversions: '15%',
    },
  ];

  return (
    <Container>
      <Title>Campaign List</Title>

      <FilterTabs>
        <FilterTab active={activeTab === 'active'} onClick={() => setActiveTab('active')}>
          Active{' '}
          <Box component="span" sx={{ ml: 1, px: 1, py: 0.25, bgcolor: activeTab === 'active' ? '#666' : '#ccc', borderRadius: '12px', color: 'white', fontSize: '0.75rem' }}>
            4
          </Box>
        </FilterTab>
        <FilterTab active={activeTab === 'paused'} onClick={() => setActiveTab('paused')}>
          Paused{' '}
          <Box component="span" sx={{ ml: 1, px: 1, py: 0.25, bgcolor: '#ccc', borderRadius: '12px', color: '#666', fontSize: '0.75rem' }}>
            2
          </Box>
        </FilterTab>
        <FilterTab active={activeTab === 'draft'} onClick={() => setActiveTab('draft')}>
          Draft{' '}
          <Box component="span" sx={{ ml: 1, px: 1, py: 0.25, bgcolor: '#ccc', borderRadius: '12px', color: '#666', fontSize: '0.75rem' }}>
            1
          </Box>
        </FilterTab>
        <FilterTab active={activeTab === 'completed'} onClick={() => setActiveTab('completed')}>
          Completed{' '}
          <Box component="span" sx={{ ml: 1, px: 1, py: 0.25, bgcolor: '#ccc', borderRadius: '12px', color: '#666', fontSize: '0.75rem' }}>
            10
          </Box>
        </FilterTab>
      </FilterTabs>

      {campaigns.map((campaign) => (
        <CampaignCard key={campaign.id}>
          <LeftSection>
            <Box display="flex" alignItems="center" gap={1.5}>
              <CampaignTitle>{campaign.name}</CampaignTitle>
              <StatusChip
                icon={<FiberManualRecord sx={{ fontSize: '8px' }} />}
                label="Active"
              />
            </Box>
            <DateText>Launched on {campaign.launchDate}</DateText>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography sx={{ fontSize: '0.9rem', color: '#999', fontWeight: 400 }}>
                Channel
              </Typography>
              <ChannelChip
                icon={<MarkEmailRead />}
                label={campaign.channel}
              />
            </Box>
          </LeftSection>

          <RightSection>
            <KPIsGrid>
              <KPICell>
                <KPILabel>Leads</KPILabel>
                <KPIValue>{campaign.leads}</KPIValue>
              </KPICell>
              <KPICell>
                <KPILabel>CTR</KPILabel>
                <KPIValue>{campaign.ctr}</KPIValue>
              </KPICell>
              <KPICell>
                <KPILabel>Open Rate</KPILabel>
                <KPIValue>{campaign.openRate}</KPIValue>
              </KPICell>
              <KPICell>
                <KPILabel>Conversions</KPILabel>
                <KPIValue>{campaign.conversions}</KPIValue>
              </KPICell>
            </KPIsGrid>

            <ActionButtons>
              <PauseButton>Pause</PauseButton>
              <IconButton size="small">
                <MoreVert />
              </IconButton>
            </ActionButtons>
          </RightSection>
        </CampaignCard>
      ))}
    </Container>
  );
};

export default CampaignList;
