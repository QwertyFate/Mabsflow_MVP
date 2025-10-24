import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components
const FormContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#f5f5f0', // Light beige background
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(3),
}));

const ProgressBar = styled(Box)(({ theme }) => ({
  backgroundColor: '#ff6b35', // Orange color
  height: '4px',
  borderRadius: '2px',
  marginBottom: theme.spacing(2),
}));

const MainContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flex: 1,
  width: '100%',
  maxWidth: '730px',
  paddingTop: theme.spacing(2),
}));

const NextButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff6b35',
  color: 'white',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.2, 3),
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  height: '48px',
  minWidth: '120px',
  '&:hover': {
    backgroundColor: '#e55a2b',
  },
}));

const BackButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f5f5f0',
  color: '#333',
  border: '1px solid #ddd',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.2, 3),
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  height: '48px',
  minWidth: '120px',
  '&:hover': {
    backgroundColor: '#e8e8e8',
  },
}));

const CreateProjectButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff6b35',
  color: 'white',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.2, 3),
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  height: '48px',
  minWidth: '140px',
  '&:hover': {
    backgroundColor: '#e55a2b',
  },
}));

const UploadButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f5f5f0',
  color: '#333',
  border: '1px solid #ddd',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  fontSize: '0.9rem',
  fontWeight: 500,
  textTransform: 'none',
  height: '40px',
  '&:hover': {
    backgroundColor: '#e8e8e8',
  },
}));

const ImagePlaceholder = styled(Box)(({ theme }) => ({
  width: '120px',
  height: '120px',
  backgroundColor: '#e8e8e8',
  borderRadius: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px dashed #ccc',
}));

const DragDropArea = styled(Box)(({ theme }) => ({
  width: '730px',
  height: '120px',
  backgroundColor: '#f9f9f9',
  border: '2px dashed #ccc',
  borderRadius: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f0f0f0',
    borderColor: '#ff6b35',
  },
}));

const BrandToneChip = styled(Chip)(({ theme, selected }) => ({
  backgroundColor: selected ? '#333' : '#f5f5f0',
  color: selected ? 'white' : '#333',
  border: '1px solid #ddd',
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1, 2),
  fontSize: '1rem',
  fontWeight: 500,
  cursor: 'pointer',
  minWidth: '100px',
  height: '48px',
  '&:hover': {
    backgroundColor: selected ? '#333' : '#e8e8e8',
  },
}));

const Footer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '730px',
  marginTop: theme.spacing(4),
}));

const ProjectForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [projectData, setProjectData] = useState({
    name: '',
    goal: '',
    description: '',
    brandTone: '',
    competitorName: '',
    competitorWebsite: '',
    profileImage: null,
    marketingAssets: null,
  });

  const brandToneOptions = [
    'Professional',
    'Playful', 
    'Bold',
    'Empathetic',
    'Witty',
    'Elegant',
    'Other'
  ];

  const handleInputChange = (field, value) => {
    setProjectData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBrandToneSelect = (tone) => {
    setProjectData(prev => ({
      ...prev,
      brandTone: tone
    }));
  };

  const handleFileUpload = (field, file) => {
    setProjectData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      setCurrentStep(4);
    } else if (currentStep === 4) {
      setCurrentStep(5);
    } else if (currentStep === 5) {
      console.log('Project data:', projectData);
      alert('Project created successfully!');
      onClose();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep1 = () => (
    <>
      {/* Top Section with Progress Bar */}
      <Box display="flex" flexDirection="column" alignItems="center" width="100%" maxWidth="730px">
        <ProgressBar sx={{ width: '33%', maxWidth: '200px' }} />
        <Typography 
          variant="body2" 
          color="#666" 
          sx={{ 
            fontSize: '0.9rem',
            fontWeight: 400,
            marginBottom: 2
          }}
        >
          Step 1 of 5
        </Typography>
      </Box>

      {/* Main Content Area */}
      <MainContent>
        <Box textAlign="center">
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              color: '#333', 
              mb: 2,
              fontSize: '1.75rem'
            }}
          >
            What is the name of your project?
          </Typography>

          <Typography 
            variant="body1" 
            color="#666" 
            sx={{ 
              fontSize: '1rem',
              lineHeight: 1.5,
              mb: 4,
              maxWidth: '450px',
              mx: 'auto',
              fontWeight: 400
            }}
          >
            This will be the name that shows on your project page, choose something appropriate for your workspace
          </Typography>

          <Box mb={4}>
            <TextField
              value={projectData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Project name here"
              variant="outlined"
              sx={{
                width: '730px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                  height: '56px',
                  backgroundColor: 'white',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6b35',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6b35',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  fontSize: '1rem',
                  padding: '16px 20px',
                },
              }}
            />
          </Box>

          <NextButton
            onClick={handleNext}
            disabled={!projectData.name.trim()}
          >
            Next
          </NextButton>
        </Box>
      </MainContent>
    </>
  );

  const renderStep2 = () => (
    <>
      {/* Top Section with Progress Bar */}
      <Box display="flex" flexDirection="column" alignItems="center" width="100%" maxWidth="730px">
        <ProgressBar sx={{ width: '66%', maxWidth: '400px' }} />
        <Typography 
          variant="body2" 
          color="#666" 
          sx={{ 
            fontSize: '0.9rem',
            fontWeight: 400,
            marginBottom: 2
          }}
        >
          Step 2 of 5
        </Typography>
      </Box>

      {/* Main Content Area */}
      <MainContent>
        <Box textAlign="center">
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              color: '#333', 
              mb: 2,
              fontSize: '1.75rem'
            }}
          >
            What is your project goal?
          </Typography>

          <Typography 
            variant="body1" 
            color="#666" 
            sx={{ 
              fontSize: '1rem',
              lineHeight: 1.5,
              mb: 4,
              maxWidth: '450px',
              mx: 'auto',
              fontWeight: 400
            }}
          >
            Describe the major goal of your project and what your project is about.
          </Typography>

          <Box mb={3} sx={{ mx: 'auto' }}>
            <FormControl sx={{ width: '730px' }}>
              <InputLabel>Select your project goal</InputLabel>
              <Select
                value={projectData.goal}
                onChange={(e) => handleInputChange('goal', e.target.value)}
                label="Select your project goal"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 1,
                  textAlign: 'left',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ddd',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6b35',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6b35',
                  },
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                  },
                }}
              >
                <MenuItem value="automation">Automation</MenuItem>
                <MenuItem value="data-analysis">Data Analysis</MenuItem>
                <MenuItem value="web-development">Web Development</MenuItem>
                <MenuItem value="mobile-app">Mobile App</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box mb={4} sx={{ mx: 'auto' }}>
            <TextField
              multiline
              rows={4}
              value={projectData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Brief description about your project"
              variant="outlined"
              sx={{
                width: '730px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                  backgroundColor: 'white',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6b35',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6b35',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  fontSize: '1rem',
                  padding: '16px 20px',
                },
              }}
            />
          </Box>

          <Box display="flex" gap={2} justifyContent="center">
            <BackButton onClick={handleBack}>
              Back
            </BackButton>
            <NextButton
              onClick={handleNext}
              disabled={!projectData.goal.trim() || !projectData.description.trim()}
            >
              Next
            </NextButton>
          </Box>
        </Box>
      </MainContent>
    </>
  );

  const renderStep3 = () => (
    <>
      {/* Top Section with Progress Bar */}
      <Box display="flex" flexDirection="column" alignItems="center" width="100%" maxWidth="730px">
        <ProgressBar sx={{ width: '60%', maxWidth: '360px' }} />
        <Typography 
          variant="body2" 
          color="#666" 
          sx={{ 
            fontSize: '0.9rem',
            fontWeight: 400,
            marginBottom: 2
          }}
        >
          Step 3 of 5
        </Typography>
      </Box>

      {/* Main Content Area */}
      <MainContent>
        <Box textAlign="center">
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              color: '#333', 
              mb: 2,
              fontSize: '1.75rem'
            }}
          >
            Choose your brand tone
          </Typography>

          <Typography 
            variant="body1" 
            color="#666" 
            sx={{ 
              fontSize: '1rem',
              lineHeight: 1.5,
              mb: 4,
              maxWidth: '450px',
              mx: 'auto',
              fontWeight: 400
            }}
          >
            How do you want your emails to sound?
          </Typography>

          {/* Brand Tone Options - Two rows only */}
          <Box mb={4} sx={{ maxWidth: '600px', mx: 'auto' }}>
            {/* First row - 4 options */}
            <Box 
              display="flex" 
              flexWrap="wrap" 
              gap={2} 
              justifyContent="center"
              sx={{ mb: 2 }}
            >
              {brandToneOptions.slice(0, 4).map((tone) => (
                <BrandToneChip
                  key={tone}
                  label={tone}
                  selected={projectData.brandTone === tone}
                  onClick={() => handleBrandToneSelect(tone)}
                />
              ))}
            </Box>
            {/* Second row - 3 options */}
            <Box 
              display="flex" 
              flexWrap="wrap" 
              gap={2} 
              justifyContent="center"
            >
              {brandToneOptions.slice(4).map((tone) => (
                <BrandToneChip
                  key={tone}
                  label={tone}
                  selected={projectData.brandTone === tone}
                  onClick={() => handleBrandToneSelect(tone)}
                />
              ))}
            </Box>
          </Box>

          <Box display="flex" gap={2} justifyContent="center">
            <BackButton onClick={handleBack}>
              Back
            </BackButton>
            <NextButton
              onClick={handleNext}
              disabled={!projectData.brandTone.trim()}
            >
              Next
            </NextButton>
          </Box>
        </Box>
      </MainContent>
    </>
  );

  const renderStep4 = () => (
    <>
      {/* Top Section with Progress Bar */}
      <Box display="flex" flexDirection="column" alignItems="center" width="100%" maxWidth="730px">
        <ProgressBar sx={{ width: '80%', maxWidth: '480px' }} />
        <Typography 
          variant="body2" 
          color="#666" 
          sx={{ 
            fontSize: '0.9rem',
            fontWeight: 400,
            marginBottom: 2
          }}
        >
          Step 4 of 5
        </Typography>
      </Box>

      {/* Main Content Area */}
      <MainContent>
        <Box textAlign="center">
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              color: '#333', 
              mb: 2,
              fontSize: '1.75rem'
            }}
          >
            Identify the competition
          </Typography>

          <Typography 
            variant="body1" 
            color="#666" 
            sx={{ 
              fontSize: '1rem',
              lineHeight: 1.5,
              mb: 4,
              maxWidth: '450px',
              mx: 'auto',
              fontWeight: 400
            }}
          >
            Who's setting the pace in your space?
          </Typography>

          {/* Competitor Name Input */}
          <Box mb={3} sx={{ mx: 'auto' }}>
            <TextField
              value={projectData.competitorName}
              onChange={(e) => handleInputChange('competitorName', e.target.value)}
              placeholder="Competitor Name"
              variant="outlined"
              sx={{
                width: '730px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                  height: '56px',
                  backgroundColor: 'white',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6b35',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6b35',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  fontSize: '1rem',
                  padding: '16px 20px',
                },
              }}
            />
          </Box>

          {/* Website URL Input with https:// prefix */}
          <Box mb={4} sx={{ mx: 'auto' }}>
            <TextField
              value={projectData.competitorWebsite}
              onChange={(e) => handleInputChange('competitorWebsite', e.target.value)}
              placeholder="Website URL"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <Box
                    sx={{
                      color: '#666',
                      fontSize: '1rem',
                      fontWeight: 400,
                      paddingRight: 1,
                    }}
                  >
                    https://
                  </Box>
                ),
              }}
              sx={{
                width: '730px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                  height: '56px',
                  backgroundColor: 'white',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6b35',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6b35',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  fontSize: '1rem',
                  padding: '16px 20px',
                },
              }}
            />
          </Box>

          <Box display="flex" gap={2} justifyContent="center">
            <BackButton onClick={handleBack}>
              Back
            </BackButton>
            <NextButton
              onClick={handleNext}
              disabled={!projectData.competitorName.trim() || !projectData.competitorWebsite.trim()}
            >
              Next
            </NextButton>
          </Box>
        </Box>
      </MainContent>
    </>
  );

  const renderStep5 = () => (
    <>
      {/* Top Section with Progress Bar */}
      <Box display="flex" flexDirection="column" alignItems="center" width="100%" maxWidth="730px">
        <ProgressBar sx={{ width: '100%', maxWidth: '730px' }} />
        <Typography 
          variant="body2" 
          color="#666" 
          sx={{ 
            fontSize: '0.9rem',
            fontWeight: 400,
            marginBottom: 2
          }}
        >
          Step 5 of 5
        </Typography>
      </Box>

      {/* Main Content Area */}
      <MainContent>
        <Box textAlign="center" width="100%">
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              color: '#333', 
              mb: 2,
              fontSize: '1.75rem'
            }}
          >
            Bring Your Brand to Life
          </Typography>

          <Typography 
            variant="body1" 
            color="#666" 
            sx={{ 
              fontSize: '1rem',
              lineHeight: 1.5,
              mb: 4,
              maxWidth: '450px',
              mx: 'auto',
              fontWeight: 400
            }}
          >
            Add a face and feel to your project.
          </Typography>

          {/* Upload Project Profile Image */}
          <Box mb={4} sx={{ width: '730px', mx: 'auto' }}>
            <Box display="flex" alignItems="center" gap={3}>
              <ImagePlaceholder>
                <Typography variant="body2" color="#999">
                  Image
                </Typography>
              </ImagePlaceholder>
              <Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    color: '#333', 
                    mb: 1,
                    textAlign: 'left'
                  }}
                >
                  Upload Project Profile Image
                </Typography>
                <Typography 
                  variant="body2" 
                  color="#666" 
                  sx={{ 
                    mb: 2,
                    textAlign: 'left',
                    fontSize: '0.9rem'
                  }}
                >
                  This helps personalize emails, dashboards, and reports.
                </Typography>
                <UploadButton
                  onClick={() => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'image/*';
                    input.onchange = (e) => handleFileUpload('profileImage', e.target.files[0]);
                    input.click();
                  }}
                >
                  Upload Picture
                </UploadButton>
              </Box>
            </Box>
          </Box>

          {/* Upload Marketing Assets */}
          <Box mb={4} sx={{ width: '730px', mx: 'auto' }}>
            <Box textAlign="left">
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#333', 
                  mb: 1
                }}
              >
                Upload Marketing Assets
              </Typography>
              <Typography 
                variant="body2" 
                color="#666" 
                sx={{ 
                  mb: 2,
                  fontSize: '0.9rem',
                  lineHeight: 1.4
                }}
              >
                Brand guidelines, templates, brochures, or any other assets we can use to keep your campaigns consistent and on-brand.
              </Typography>
              <DragDropArea
                onClick={() => {
                  const input = document.createElement('input');
                  input.type = 'file';
                  input.multiple = true;
                  input.onchange = (e) => handleFileUpload('marketingAssets', e.target.files);
                  input.click();
                }}
              >
                <UploadButton>
                  Browse
                </UploadButton>
                <Typography 
                  variant="body2" 
                  color="#666" 
                  sx={{ 
                    mt: 1,
                    fontSize: '0.9rem'
                  }}
                >
                  Or drag a file here
                </Typography>
              </DragDropArea>
            </Box>
          </Box>

          <Box display="flex" gap={2} justifyContent="center">
            <BackButton onClick={handleBack}>
              Back
            </BackButton>
            <CreateProjectButton onClick={handleNext}>
              Create Project
            </CreateProjectButton>
          </Box>
        </Box>
      </MainContent>
    </>
  );

  return (
    <FormContainer>
      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}
      {currentStep === 4 && renderStep4()}
      {currentStep === 5 && renderStep5()}

      {/* Footer */}
      <Footer>
        <Link 
          href="#" 
          sx={{ 
            color: '#333', 
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '0.9rem',
            '&:hover': { textDecoration: 'underline' }
          }}
        >
          Privacy & Terms
        </Link>
        <Link 
          href="#" 
          sx={{ 
            color: '#333', 
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '0.9rem',
            '&:hover': { textDecoration: 'underline' }
          }}
        >
          Contact Us
        </Link>
      </Footer>
    </FormContainer>
  );
};

export default ProjectForm;
