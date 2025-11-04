// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://your-backend-url.com/api';

const getAuthToken = () => localStorage.getItem('authToken') || '';

export const apiRequest = async (endpoint, options = {}) => {
  const token = getAuthToken();

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };

  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const res = await fetch(`${API_BASE_URL}${endpoint}`, config);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};

// Validate campaign data before sending (checks camelCase fields from frontend)
const validateCampaignData = (campaignData) => {
  const requiredFields = ['campaignGoal', 'productServices', 'targetAudience', 'triggerTiming'];
  const errors = [];

  // Check if campaignData is an object
  if (!campaignData || typeof campaignData !== 'object') {
    throw new Error('Campaign data must be an object');
  }

  // Check required fields
  requiredFields.forEach(field => {
    if (!campaignData[field] || campaignData[field].trim() === '') {
      errors.push(`Missing required field: ${field}`);
    }
  });

  // Check field types
  Object.keys(campaignData).forEach(key => {
    if (typeof campaignData[key] !== 'string') {
      errors.push(`Field ${key} must be a string`);
    }
  });

  if (errors.length > 0) {
    throw new Error(`Validation failed: ${errors.join(', ')}`);
  }

  return true;
};

// Transform camelCase to snake_case for backend
const transformToBackendFormat = (campaignData) => {
  return {
    campaign_goal: campaignData.campaignGoal,
    product_service: campaignData.productServices,
    target_audience: campaignData.targetAudience,
    trigger_timing: campaignData.triggerTiming,
  };
};

export const generateCampaign = (campaignData) => {
  // Validate the data (using camelCase field names from frontend)
  validateCampaignData(campaignData);

  // Transform to backend format (snake_case)
  const backendPayload = transformToBackendFormat(campaignData);

  // Log both versions for debugging
  console.log('Campaign data validation:', {
    frontendFormat: campaignData,
    backendFormat: backendPayload,
  });

  // Create JSON string
  const jsonPayload = JSON.stringify(backendPayload);
  
  console.log('Sending to API:', {
    endpoint: '/draft-campaign-template',
    payload: backendPayload,
    jsonString: jsonPayload,
  });

  // Verify JSON stringify works correctly
  try {
    JSON.parse(jsonPayload);
  } catch (e) {
    throw new Error('Invalid JSON format');
  }

  return apiRequest('/api/draft-campaign-template', {
    method: 'POST',
    body: jsonPayload,
  });
};

export const approveCampaign = (emailSequences) =>
  apiRequest('/campaign/approve', {
    method: 'POST',
    body: JSON.stringify({ emailSequences }),
  });

// Get campaigns (optionally filter by status)
export const getCampaigns = (status) => {
  return apiRequest(`/api/campaigns`, { method: 'GET' });
};

// Update a campaign's fields (e.g., status)
export const updateCampaign = (campaignId, payload) =>
  apiRequest(`/api/campaigns/${campaignId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload), // e.g., { status: 'paused' }
  });

// Get a single campaign (details + templates) by ID
export const getCampaignById = (campaignId) =>
  apiRequest(`/api/campaigns/${campaignId}`, { method: 'GET' });
