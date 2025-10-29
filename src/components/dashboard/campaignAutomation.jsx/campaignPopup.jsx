import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  TextField,
  Paper,
  IconButton,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Close, Check, Refresh } from '@mui/icons-material';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    width: '90%',
    maxWidth: '900px',
    maxHeight: '85vh',
    borderRadius: theme.spacing(2),
  },
}));

const DialogHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 3),
  borderBottom: '1px solid #e0e0e0',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#333',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: '#666',
  marginTop: theme.spacing(0.5),
}));

const EmailSequenceContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  padding: theme.spacing(2, 0),
}));

const EmailCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderRadius: theme.spacing(1.5),
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  border: '1px solid #e0e0e0',
}));

const EmailHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const EmailNumber = styled(Box)(({ theme }) => ({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  backgroundColor: '#ff6b35',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  fontSize: '0.9rem',
}));

const EmailTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 600,
  color: '#333',
}));

const DelayInfo = styled(Typography)(({ theme }) => ({
  fontSize: '0.85rem',
  color: '#999',
  marginLeft: 'auto',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    '&:hover fieldset': {
      borderColor: '#ff6b35',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff6b35',
    },
  },
}));

const DialogButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 3),
  borderTop: '1px solid #e0e0e0',
  justifyContent: 'flex-end',
}));

const RegenerateButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#666',
  border: '1px solid #ddd',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2.5),
  textTransform: 'none',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
  },
}));

const ApproveButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff6b35',
  color: 'white',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2.5),
  textTransform: 'none',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#e55a2b',
  },
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    '&:hover fieldset': {
      borderColor: '#ff6b35',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff6b35',
    },
  },
}));

const CampaignPopup = ({ open, onClose, onApprove, onRegenerate, emailData }) => {
  const [emailSequences, setEmailSequences] = useState([
    {
      id: 1,
      title: 'Welcome Email',
      subject: 'Welcome to our platform!',
      body: 'Hello {{name}}, welcome to our service. We are excited to have you on board!',
      delay: 'Immediately',
    },
    {
      id: 2,
      title: 'Product Introduction',
      subject: 'Discover our latest features',
      body: 'Hi {{name}}, check out our amazing features that can help you achieve your goals.',
      delay: '1 day after',
    },
    {
      id: 3,
      title: 'Engagement Follow-up',
      subject: 'How are things going?',
      body: 'Hey {{name}}, we wanted to check in and see how you are doing with our platform.',
      delay: '3 days after',
    },
  ]);

  // Update email sequences when emailData prop changes
  useEffect(() => {
    if (emailData && Array.isArray(emailData) && emailData.length > 0) {
      setEmailSequences(emailData);
    }
  }, [emailData]);

  const handleFieldChange = (emailId, field, value) => {
    setEmailSequences(sequences =>
      sequences.map(seq =>
        seq.id === emailId ? { ...seq, [field]: value } : seq
      )
    );
  };

  const handleApprove = () => {
    if (onApprove) {
      onApprove(emailSequences);
    }
  };

  const handleRegenerate = () => {
    if (onRegenerate) {
      onRegenerate();
    }
  };

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogHeader>
        <Box>
          <Title>Generated Email Sequence</Title>
          <Subtitle>Review and edit the AI-generated email campaign</Subtitle>
        </Box>
        <IconButton onClick={onClose} size="small">
          <Close />
        </IconButton>
      </DialogHeader>

      <DialogContent>
        <EmailSequenceContainer>
          {emailSequences.map((email, index) => (
            <EmailCard key={email.id}>
              <EmailHeader>
                <EmailNumber>{index + 1}</EmailNumber>
                <EmailTitle>{email.title}</EmailTitle>
                <DelayInfo>Sent: {email.delay}</DelayInfo>
              </EmailHeader>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <StyledTextField
                  label="Email Subject"
                  value={email.subject}
                  onChange={(e) => handleFieldChange(email.id, 'subject', e.target.value)}
                  fullWidth
                  size="small"
                />

                <StyledTextField
                  label="Email Body"
                  value={email.body}
                  onChange={(e) => handleFieldChange(email.id, 'body', e.target.value)}
                  fullWidth
                  multiline
                  rows={4}
                  size="small"
                />

                <StyledFormControl fullWidth size="small">
                  <InputLabel>Send Schedule</InputLabel>
                  <Select
                    value={email.delay}
                    onChange={(e) => handleFieldChange(email.id, 'delay', e.target.value)}
                    label="Send Schedule"
                  >
                    <MenuItem value="Immediately">Immediately</MenuItem>
                    <MenuItem value="1 day after">1 day after</MenuItem>
                    <MenuItem value="2 days after">2 days after</MenuItem>
                    <MenuItem value="3 days after">3 days after</MenuItem>
                    <MenuItem value="1 week after">1 week after</MenuItem>
                    <MenuItem value="2 weeks after">2 weeks after</MenuItem>
                    <MenuItem value="1 month after">1 month after</MenuItem>
                  </Select>
                </StyledFormControl>
              </Box>
            </EmailCard>
          ))}
        </EmailSequenceContainer>
      </DialogContent>

      <DialogButtons>
        <RegenerateButton
          startIcon={<Refresh />}
          onClick={handleRegenerate}
        >
          Regenerate
        </RegenerateButton>
        <ApproveButton
          startIcon={<Check />}
          onClick={handleApprove}
        >
          Approve
        </ApproveButton>
      </DialogButtons>
    </StyledDialog>
  );
};

export default CampaignPopup;