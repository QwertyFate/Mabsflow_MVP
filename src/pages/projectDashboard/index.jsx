import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import {
  MoreVert,
  FolderOpen,
  Add,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ProjectForm from '../../components/projectDashboard/projectForm';

// Custom styled components
const DashboardContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#f5f5f0', // Light beige background
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

const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-2px)',
  },
}));

const CreateProjectBar = styled(Box)(({ theme }) => ({
  backgroundColor: '#f5f5f0', // Light beige background
  border: '1px solid #8B4513', // Dark brown border
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  width: '100%',
}));

const CreateButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff6b35',
  color: 'white',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  fontSize: '0.95rem',
  fontWeight: 600,
  textTransform: 'none',
  height: '40px',
  '&:hover': {
    backgroundColor: '#e55a2b',
  },
}));

const ProjectIcon = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  backgroundColor: '#e0e0e0',
  borderRadius: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
}));

const StackedFoldersIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(2),
  position: 'relative',
  width: '40px',
  height: '32px',
}));

const ProjectDashboard = () => {
  const navigate = useNavigate();
  const [showProjectForm, setShowProjectForm] = useState(false);

  // Sample project data
  const projects = [
    { id: 1, name: 'Project Name Here', description: 'Team workspace' },
    { id: 2, name: 'Project Name Here', description: 'Team workspace' },
    { id: 3, name: 'Project Name Here', description: 'Team workspace' },
    { id: 4, name: 'Project Name Here', description: 'Team workspace' },
    { id: 5, name: 'Project Name Here', description: 'Team workspace' },
  ];

  const handleProjectClick = (projectId) => {
    console.log('Project clicked:', projectId);
    // Navigate to main dashboard
    navigate('/main');
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    navigate('/auth');
  };

  const handleCreateProject = () => {
    console.log('Create new project clicked');
    setShowProjectForm(true);
  };

  const handleCloseProjectForm = () => {
    setShowProjectForm(false);
  };

  // If showing project form, render it instead of dashboard
  if (showProjectForm) {
    return <ProjectForm onClose={handleCloseProjectForm} />;
  }

  return (
    <DashboardContainer>
      {/* Brand Logo - Centered at top */}
      <BrandLogo elevation={0}>
        LOGO
      </BrandLogo>

      {/* Optional: Add a logout button */}
      <Box position="absolute" top={16} right={16}>
        <Button 
          onClick={handleLogout}
          sx={{ color: '#666', textTransform: 'none' }}
        >
          Logout
        </Button>
      </Box>

      {/* Main Content */}
      <Box display="flex" flexDirection="column" alignItems="center" maxWidth="600px" width="100%">
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
            Select a Project
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
            Projects help you keep leads, sequences, and settings separate for each clients or workspace.
          </Typography>
        </Box>

        {/* Project List */}
        <Box width="100%" mb={2}>
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              elevation={0}
              onClick={() => handleProjectClick(project.id)}
            >
              <Box display="flex" alignItems="center">
                <ProjectIcon>
                  <FolderOpen sx={{ color: '#999', fontSize: '24px' }} />
                </ProjectIcon>
                <Box flex={1}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      color: '#333',
                      fontSize: '1rem',
                      mb: 0.5
                    }}
                  >
                    {project.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="#666"
                    sx={{ fontSize: '0.9rem' }}
                  >
                    {project.description}
                  </Typography>
                </Box>
                <IconButton 
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Project menu clicked:', project.id);
                  }}
                >
                  <MoreVert sx={{ color: '#666' }} />
                </IconButton>
              </Box>
            </ProjectCard>
          ))}
        </Box>

        {/* Create New Project Bar */}
        <CreateProjectBar>
          <StackedFoldersIcon>
            {/* Red folder (back) */}
            <FolderOpen 
              sx={{ 
                color: '#f44336', 
                fontSize: '28px',
                position: 'absolute',
                top: '4px',
                left: '0px',
                zIndex: 1
              }} 
            />
            {/* Yellow folder (middle) */}
            <FolderOpen 
              sx={{ 
                color: '#ffeb3b', 
                fontSize: '28px',
                position: 'absolute',
                top: '2px',
                left: '2px',
                zIndex: 2
              }} 
            />
            {/* Blue folder (front) */}
            <FolderOpen 
              sx={{ 
                color: '#2196f3', 
                fontSize: '28px',
                position: 'absolute',
                top: '0px',
                left: '4px',
                zIndex: 3
              }} 
            />
          </StackedFoldersIcon>
          <Box flex={1}>
            <Typography 
              variant="body1" 
              sx={{ 
                fontWeight: 500, 
                color: '#333',
                fontSize: '1rem'
              }}
            >
              Working on a project for a new client?
            </Typography>
          </Box>
          <CreateButton
            onClick={handleCreateProject}
            startIcon={<Add />}
          >
            Create New Project
          </CreateButton>
        </CreateProjectBar>
      </Box>
    </DashboardContainer>
  );
};

export default ProjectDashboard;
