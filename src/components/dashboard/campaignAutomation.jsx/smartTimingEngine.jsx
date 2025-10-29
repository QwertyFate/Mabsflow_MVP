
import React from 'react';
import {
  Box,
  Card,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const OuterContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(0, 3, 3, 3),
}));

const WhiteCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(2),
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  overflow: 'hidden',
}));

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'white', // Changed from '#f5f5f0' to 'white'
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 700,
  color: '#333',
  marginBottom: theme.spacing(3),
}));

const KPICard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #e0e0e0',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  minHeight: '100px',
}));

const KPILabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.85rem',
  color: '#999',
  fontWeight: 400,
  marginBottom: theme.spacing(0.5),
}));

const KPIValue = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#333',
}));

const KPIsContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

const ChartContainer = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(2),
  border: '1px solid #e0e0e0',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  height: '420px', // Increased from 400px to 420px to accommodate legend
  display: 'flex',
  flexDirection: 'column',
  overflow: 'visible', // Changed from default to 'visible' to ensure legend is shown
}));

const ChartTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#333',
  marginBottom: theme.spacing(2),
}));

const ChartsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1.5fr', // Changed to make Performance Overview wider
  gap: theme.spacing(3),
}));

const SmartTimingEngine = () => {
  // Sample data for engagement heatmap
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const timeSlots = ['6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm'];
  
  // Sample engagement data (0-100 scale)
  const engagementData = [
    [0, 0, 20, 40, 50, 60, 70, 85, 90], // Mon
    [0, 10, 30, 50, 60, 70, 80, 85, 90], // Tue
    [0, 10, 30, 50, 60, 70, 80, 85, 90], // Wed
    [0, 15, 40, 50, 60, 70, 80, 85, 90], // Thu
    [0, 10, 30, 50, 60, 70, 80, 85, 90], // Fri
    [0, 0, 20, 40, 50, 70, 80, 85, 90], // Sat
    [0, 0, 10, 20, 30, 40, 50, 60, 95], // Sun
  ];

  const getHeatmapColor = (value) => {
    if (value === 0) return '#fff';
    if (value < 30) return '#ffebe6';
    if (value < 50) return '#ffc5b3';
    if (value < 70) return '#ff9f80';
    if (value < 85) return '#ff794d';
    if (value < 95) return '#ff5333';
    return '#ff2d00';
  };

  // Sample performance data
  const performanceData = {
    open: [40, 50, 70, 65, 90, 70, 95, 65, 90],
    click: [30, 40, 60, 60, 70, 60, 85, 55, 70],
    conversion: [20, 30, 40, 40, 50, 50, 60, 30, 40],
  };

  return (
    <OuterContainer>
      <WhiteCard>
        <Container>
          <Title>Smart Timing Engine</Title>

          {/* KPI Cards */}
          <KPIsContainer>
            <KPICard>
              <KPILabel>Optimal Send Time Range</KPILabel>
              <KPIValue>9AM - 12PM</KPIValue>
            </KPICard>
            <KPICard>
              <KPILabel>Engagement Lift</KPILabel>
              <KPIValue>+24%</KPIValue>
            </KPICard>
            <KPICard>
              <KPILabel>Campaigns Using Smart Timing</KPILabel>
              <KPIValue>18</KPIValue>
            </KPICard>
            <KPICard>
              <KPILabel>Active Timezones Detected</KPILabel>
              <KPIValue>12</KPIValue>
            </KPICard>
          </KPIsContainer>

          {/* Charts */}
          <ChartsGrid>
            {/* Audience Engagement Heatmap */}
            <ChartContainer>
              <ChartTitle>Audience Engagement</ChartTitle>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 50px)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography sx={{ fontSize: '0.75rem', color: '#999', minWidth: '40px' }}>Day</Typography>
                  <Box sx={{ display: 'flex', gap: 0.5, ml: 1 }}>
                    {timeSlots.map((slot) => (
                      <Typography key={slot} sx={{ fontSize: '0.65rem', color: '#999', width: '28px', textAlign: 'center' }}>
                        {slot}
                      </Typography>
                    ))}
                  </Box>
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  {days.map((day, dayIndex) => (
                    <Box key={day} sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ fontSize: '0.75rem', color: '#999', minWidth: '40px' }}>
                        {day}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        {engagementData[dayIndex].map((value, timeIndex) => (
                          <Box
                            key={timeIndex}
                            sx={{
                              width: '28px',
                              height: '24px',
                              backgroundColor: getHeatmapColor(value),
                              border: '1px solid #e0e0e0',
                              borderRadius: '2px',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </ChartContainer>

            {/* Performance Overview Line Chart */}
            <ChartContainer>
              <ChartTitle>Performance Overview</ChartTitle>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 50px)', position: 'relative' }}>
                {/* Y-axis */}
                <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '30px' }}>
                  {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].reverse().map((val) => (
                    <Typography key={val} sx={{ fontSize: '0.7rem', color: '#999' }}>
                      {val}%
                    </Typography>
                  ))}
                </Box>

                {/* Chart Area */}
                <Box sx={{ ml: 4, display: 'flex', flex: 1, flexDirection: 'column', position: 'relative' }}>
                  {/* Grid Lines */}
                  {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((val) => (
                    <Box
                      key={val}
                      sx={{
                        position: 'absolute',
                        top: `${100 - val}%`,
                        left: 0,
                        right: 0,
                        height: '1px',
                        backgroundColor: '#f0f0f0',
                      }}
                    />
                  ))}

                  {/* Lines */}
                  <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                    {/* Open Line (Blue) */}
                    <svg width="100%" height="100%">
                      <polyline
                        points={performanceData.open.map((val, i) => `${(i / (performanceData.open.length - 1)) * 100}%,${100 - val}%`).join(' ')}
                        fill="none"
                        stroke="#2196f3"
                        strokeWidth="2"
                      />
                    </svg>

                    {/* Click Line (Green) */}
                    <svg width="100%" height="100%">
                      <polyline
                        points={performanceData.click.map((val, i) => `${(i / (performanceData.click.length - 1)) * 100}%,${100 - val}%`).join(' ')}
                        fill="none"
                        stroke="#4caf50"
                        strokeWidth="2"
                      />
                    </svg>

                    {/* Conversion Line (Red) */}
                    <svg width="100%" height="100%">
                      <polyline
                        points={performanceData.conversion.map((val, i) => `${(i / (performanceData.conversion.length - 1)) * 100}%,${100 - val}%`).join(' ')}
                        fill="none"
                        stroke="#f44336"
                        strokeWidth="2"
                      />
                    </svg>
                  </Box>
                </Box>

                {/* X-axis */}
                <Box sx={{ ml: 4, mt: 2, display: 'flex', justifyContent: 'space-between', height: '40px' }}>
                  {timeSlots.map((slot) => (
                    <Typography key={slot} sx={{ fontSize: '0.7rem', color: '#999' }}>
                      {slot}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* Legend */}
              <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Box sx={{ width: '20px', height: '2px', backgroundColor: '#2196f3' }} />
                  <Typography sx={{ fontSize: '0.8rem', color: '#666' }}>Open</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Box sx={{ width: '20px', height: '2px', backgroundColor: '#4caf50' }} />
                  <Typography sx={{ fontSize: '0.8rem', color: '#666' }}>Click</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Box sx={{ width: '20px', height: '2px', backgroundColor: '#f44336' }} />
                  <Typography sx={{ fontSize: '0.8rem', color: '#666' }}>Conversion</Typography>
                </Box>
              </Box>
            </ChartContainer>
          </ChartsGrid>
        </Container>
      </WhiteCard>
    </OuterContainer>
  );
};

export default SmartTimingEngine;