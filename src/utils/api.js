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

export const generateCampaign = (campaignData) =>
  apiRequest('/campaign/generate', {
    method: 'POST',
    body: JSON.stringify(campaignData),
  });

export const approveCampaign = (emailSequences) =>
  apiRequest('/campaign/approve', {
    method: 'POST',
    body: JSON.stringify({ emailSequences }),
  });
