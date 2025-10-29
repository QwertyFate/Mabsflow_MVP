import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Rocket } from '@mui/icons-material';
import CampaignPopup from './campaignPopup';
import { generateCampaign } from '../../../utils/api';

// Custom styled components
const Container = styled(Box)(({ theme }) => ({
  backgroundColor: '#2d2d2d', // Dark gray background
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  margin: theme.spacing(3),
  maxWidth: '1200px',
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: 'white',
  marginBottom: theme.spacing(1),
}));

const AIText = styled('span')(({ theme }) => ({
  color: '#ff6b35', // Orange color for AI
  fontWeight: 700,
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '0.95rem',
  color: '#ccc',
  fontWeight: 400,
  lineHeight: 1.6,
}));

const FieldsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  flexWrap: 'wrap',
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  flex: 1,
  minWidth: '200px',
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#3d3d3d',
    color: 'white',
    borderRadius: theme.spacing(1),
    position: 'relative',
    '& fieldset': {
      borderColor: '#666',
    },
    '&:hover fieldset': {
      borderColor: '#ff8800', // Yellow-orange on hover
      boxShadow: '0 0 8px rgba(255, 140, 0, 0.3)', // Subtle glow
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff6b35', // Orange on focus
      borderWidth: '2px',
      boxShadow: '0 0 12px rgba(255, 107, 53, 0.4)', // Glowing effect
    },
    // Add a subtle inner glow effect
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      borderRadius: theme.spacing(1),
      padding: '2px',
      background: 'linear-gradient(45deg, #ff6b35, #ffaa00)',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      pointerEvents: 'none',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:hover::before': {
      opacity: 0.2,
    },
    '&.Mui-focused::before': {
      opacity: 0.3,
    },
  },
  '& .MuiInputLabel-root': {
    color: '#ccc',
  },
  '& .MuiOutlinedInput-input': {
    color: 'white',
  },
  '& .MuiSelect-icon': {
    color: '#ccc',
  },
}));

const GenerateButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff6b35',
  color: 'white',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5, 3),
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  width: '100%',
  '&:hover': {
    backgroundColor: '#e55a2b',
  },
}));

const QuickCampaign = () => {
  const [campaignGoal, setCampaignGoal] = useState('');
  const [productServices, setProductServices] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [triggerTiming, setTriggerTiming] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [generatedData, setGeneratedData] = useState(null);

  const handleGenerateCampaign = async () => {
    if (!campaignGoal || !productServices || !targetAudience || !triggerTiming) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const campaignData = {
        campaignGoal,
        productServices,
        targetAudience,
        triggerTiming,
      };

      // Call backend API
      const response = await generateCampaign(campaignData);
      
      // Store the response data
      setGeneratedData(response);
      
      // Open popup with the generated data
      setPopupOpen(true);
    } catch (err) {
      console.error('Failed to generate campaign:', err);
      setError('Failed to generate campaign. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleApprove = async (emailSequences) => {
    console.log('Approved email sequences:', emailSequences);
    // You can call approveCampaign(emailSequences) here if needed
    setPopupOpen(false);
  };

  const handleRegenerate = async () => {
    console.log('Regenerating campaign...');
    // Call handleGenerateCampaign again to regenerate
    await handleGenerateCampaign();
  };

  return (
    <Box>
      <Container>
        <TitleContainer>
          <MainTitle>
            Quick Campaign with Alpha <AIText>AI</AIText>
          </MainTitle>
          <Description>
            Alpha AI will design a personalized, goal-based campaign using your selected audience segment, product profile, and tone
          </Description>
        </TitleContainer>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        <FieldsContainer>
          <StyledFormControl>
            <InputLabel>Campaign Goal</InputLabel>
            <Select
              value={campaignGoal}
              onChange={(e) => setCampaignGoal(e.target.value)}
              label="Campaign Goal"
            >
              <MenuItem value="lead-generation">Lead Generation</MenuItem>
              <MenuItem value="brand-awareness">Brand Awareness</MenuItem>
              <MenuItem value="customer-retention">Customer Retention</MenuItem>
              <MenuItem value="product-launch">Product Launch</MenuItem>
            </Select>
          </StyledFormControl>

          <StyledFormControl>
            <InputLabel>Product / Services</InputLabel>
            <Select
              value={productServices}
              onChange={(e) => setProductServices(e.target.value)}
              label="Product / Services"
            >
              <MenuItem value="product-1">Product 1</MenuItem>
              <MenuItem value="product-2">Product 2</MenuItem>
              <MenuItem value="product-3">Product 3</MenuItem>
            </Select>
          </StyledFormControl>

          <StyledFormControl>
            <InputLabel>Target Audience</InputLabel>
            <Select
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              label="Target Audience"
            >
              <MenuItem value="segment-1">Segment 1</MenuItem>
              <MenuItem value="segment-2">Segment 2</MenuItem>
              <MenuItem value="segment-3">Segment 3</MenuItem>
            </Select>
          </StyledFormControl>

          <StyledFormControl>
            <InputLabel>Trigger Timing</InputLabel>
            <Select
              value={triggerTiming}
              onChange={(e) => setTriggerTiming(e.target.value)}
              label="Trigger Timing"
            >
              <MenuItem value="immediate">Immediate</MenuItem>
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
            </Select>
          </StyledFormControl>
        </FieldsContainer>

        <GenerateButton
          onClick={handleGenerateCampaign}
          startIcon={isLoading ? <CircularProgress size={24} color="inherit" /> : <Rocket />}
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Campaign'}
        </GenerateButton>
      </Container>

      <CampaignPopup
        open={popupOpen}
        onClose={handleClosePopup}
        onApprove={handleApprove}
        onRegenerate={handleRegenerate}
        emailData={generatedData}
      />
    </Box>
  );
};

export default QuickCampaign;
