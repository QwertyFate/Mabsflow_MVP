import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  Typography,
  Button,
  Chip,
  IconButton,
  Badge,
  CircularProgress,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  MoreVert,
  MarkEmailRead,
  FiberManualRecord,
} from '@mui/icons-material';
import { getCampaigns, updateCampaign, getCampaignById } from '../../../utils/api';
import CampaignPopup from './campaignPopup';

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

const StartButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff6b35',
  color: 'white',
  border: 'none',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(0.75, 2),
  fontSize: '0.9rem',
  fontWeight: 500,
  textTransform: 'none',
  minWidth: '80px',
  '&:hover': { backgroundColor: '#e55a2b' },
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
  '&:hover': { backgroundColor: '#e8e8e8', borderColor: '#ccc' },
}));

// Replace StopButton with EditButton
const EditButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#e3f2fd',
  color: '#1565c0',
  border: '1px solid #90caf9',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(0.75, 2),
  fontSize: '0.9rem',
  fontWeight: 500,
  textTransform: 'none',
  minWidth: '80px',
  '&:hover': {
    backgroundColor: '#bbdefb',
    borderColor: '#64b5f6',
  },
}));

const CampaignList = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [campaigns, setCampaigns] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [counts, setCounts] = useState({ active: 0, paused: 0, draft: 0, completed: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupLoading, setPopupLoading] = useState(false);
  const [popupError, setPopupError] = useState(null);
  const [popupEmails, setPopupEmails] = useState(null);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);

  // Local helper to update status without touching api.js
  const updateStatus = async (campaignId, status) => {
    const base = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
    const url = `${base}/campaigns/${campaignId}/status`;
    const res = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) {
      const msg = await res.text().catch(() => '');
      throw new Error(`Status ${res.status}: ${msg}`);
    }
    return res.json().catch(() => ({}));
  };

  const fetchAll = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getCampaigns();
      const list = Array.isArray(data) ? data : [];
      setCampaigns(list);
      const nextCounts = list.reduce(
        (acc, c) => {
          const s = (c.status || '').toLowerCase();
          if (s in acc) acc[s] += 1;
          return acc;
        },
        { active: 0, paused: 0, draft: 0, completed: 0 }
      );
      setCounts(nextCounts);
    } catch (e) {
      setError('Failed to load campaigns.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCampaignDetails = async (campaignId) => {
    setPopupLoading(true);
    setPopupError(null);
    try {
      const data = await getCampaignById(campaignId);

      // Normalize templates to popup shape
      const raw = data?.email_templates ?? data?.templates ?? data?.emails ?? data?.items ?? data;
      const list = Array.isArray(raw) ? raw : [];

      const normalized = list.map((t, idx) => ({
        id: t.id ?? idx + 1,
        title: t.title ?? t.name ?? `Email ${idx + 1}`,
        subject: t.subject ?? '',
        body: t.body ?? t.content ?? '',
        delay: t.delay ?? 'Immediately',
      }));

      setPopupEmails(normalized);
      setPopupOpen(true);
    } catch (e) {
      console.error('Failed to fetch campaign details', e);
      setPopupError('Failed to load email templates for this campaign.');
      setPopupOpen(true);
    } finally {
      setPopupLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
    const id = setInterval(fetchAll, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const s = activeTab.toLowerCase();
    setFiltered(campaigns.filter(c => (c.status || '').toLowerCase() === s));
  }, [activeTab, campaigns]);

  const handleStart = async (id) => {
    try {
      await updateCampaign(id, { status: 'active' });
      fetchAll();
    } catch (e) {
      console.error('Failed to start campaign', e);
    }
  };

  const handlePause = async (id) => {
    try {
      await updateCampaign(id, { status: 'paused' });
      fetchAll();
    } catch (e) {
      console.error('Failed to pause campaign', e);
    }
  };

  // Remove handleStop, add handleEdit instead
  const handleEdit = async (id) => {
    try {
      await updateCampaign(id, { status: 'draft' });
      fetchAll(); // Refresh the list
    } catch (e) {
      console.error('Failed to edit campaign', e);
    }
  };

  return (
    <Container>
      <Title>Campaign List</Title>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <FilterTabs>
        <FilterTab active={activeTab === 'active'} onClick={() => setActiveTab('active')}>
          Active
          <Box component="span" sx={{ ml: 1, px: 1, py: 0.25, bgcolor: activeTab === 'active' ? '#666' : '#ccc', borderRadius: '12px', color: 'white', fontSize: '0.75rem' }}>
            {counts.active}
          </Box>
        </FilterTab>
        <FilterTab active={activeTab === 'paused'} onClick={() => setActiveTab('paused')}>
          Paused
          <Box component="span" sx={{ ml: 1, px: 1, py: 0.25, bgcolor: activeTab === 'paused' ? '#666' : '#ccc', borderRadius: '12px', color: 'white', fontSize: '0.75rem' }}>
            {counts.paused}
          </Box>
        </FilterTab>
        <FilterTab active={activeTab === 'draft'} onClick={() => setActiveTab('draft')}>
          Draft
          <Box component="span" sx={{ ml: 1, px: 1, py: 0.25, bgcolor: activeTab === 'draft' ? '#666' : '#ccc', borderRadius: '12px', color: 'white', fontSize: '0.75rem' }}>
            {counts.draft}
          </Box>
        </FilterTab>
        <FilterTab active={activeTab === 'completed'} onClick={() => setActiveTab('completed')}>
          Completed
          <Box component="span" sx={{ ml: 1, px: 1, py: 0.25, bgcolor: activeTab === 'completed' ? '#666' : '#ccc', borderRadius: '12px', color: 'white', fontSize: '0.75rem' }}>
            {counts.completed}
          </Box>
        </FilterTab>
      </FilterTabs>

      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress />
        </Box>
      ) : filtered.length === 0 ? (
        <Box textAlign="center" py={4}>
          <Typography variant="h6" color="#999">
            No {activeTab} campaigns found
          </Typography>
        </Box>
      ) : (
        filtered.map((campaign) => (
          <CampaignCard key={campaign.id}>
            <LeftSection>
              <Box display="flex" alignItems="center" gap={1.5}>
                {activeTab === 'draft' ? (
                  <Typography
                    sx={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#1565c0',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setSelectedCampaignId(campaign.id);
                      fetchCampaignDetails(campaign.id);
                    }}
                    title="Click to edit email templates"
                  >
                    {campaign.name}
                  </Typography>
                ) : (
                  <CampaignTitle>{campaign.name}</CampaignTitle>
                )}

                <StatusChip
                  icon={<FiberManualRecord sx={{ fontSize: '8px' }} />}
                  label={campaign.status}
                />
              </Box>
              <DateText>Launched on {campaign.launchDate}</DateText>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography sx={{ fontSize: '0.9rem', color: '#999', fontWeight: 400 }}>
                  Channel
                </Typography>
                <ChannelChip
                  icon={<MarkEmailRead />}
                  label={"email"} // TODO: Replace with campaign.channel
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
                {(() => {
                  const status = (campaign.status || '').toLowerCase();
                  return (
                    <>
                      {(status === 'paused' || status === 'draft') && (
                        <StartButton onClick={() => handleStart(campaign.id)}>
                          Start
                        </StartButton>
                      )}
                      {status === 'active' && (
                        <PauseButton onClick={() => handlePause(campaign.id)}>
                          Pause
                        </PauseButton>
                      )}
                      {/* Replace Stop with Edit - show for active/paused/draft */}
                      {(status === 'active' || status === 'paused' || status === 'draft') && (
                        <EditButton onClick={() => handleEdit(campaign.id)}>
                          Edit
                        </EditButton>
                      )}
                      <IconButton size="small">
                        <MoreVert />
                      </IconButton>
                    </>
                  );
                })()}
              </ActionButtons>
            </RightSection>
          </CampaignCard>
        ))
      )}
      <CampaignPopup
        open={popupOpen}
        onClose={() => {
          setPopupOpen(false);
          setPopupError(null);
          setSelectedCampaignId(null);
        }}
        onApprove={(emailSequences) => {
          // Optional: you can PATCH back the edited templates here if you add a backend route
          setPopupOpen(false);
        }}
        onRegenerate={() => {
          // Optional: wire a regenerate call if you have a route for it
        }}
        emailData={popupLoading ? [] : popupEmails}
      />
      {popupError && (
        <Box sx={{ mt: 2 }}>
          <Alert severity="error" onClose={() => setPopupError(null)}>
            {popupError}
          </Alert>
        </Box>
      )}
    </Container>
  );
};

export default CampaignList;
