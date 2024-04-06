import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

// TimezoneCard component displays the time and name for a given timezone
const TimezoneCard = ({ timezone, timezoneName }) => {
  const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString('en-US', { timeZone: timezone, hour12: false }));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { timeZone: timezone, hour12: false }));
    }, 1000); // Update the time every second
    return () => clearInterval(timer); // Clear interval on component unmount
  }, [timezone]);

  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {timezoneName}
        </Typography>
        <Typography variant="h5" component="div">
          {currentTime}
        </Typography>
      </CardContent>
    </Card>
  );
};

function App() {
  // List of US timezones and their names
  const timezones = [
    { timezone: 'America/New_York', name: 'Eastern Time Zone (EST)' },
    { timezone: 'America/Chicago', name: 'Central Time Zone (CST)' },
    { timezone: 'America/Denver', name: 'Mountain Time Zone (MST)' },
    { timezone: 'America/Los_Angeles', name: 'Pacific Time Zone (PST)' },
    { timezone: 'America/Anchorage', name: 'Alaska Time Zone (AKST)' },
    { timezone: 'Pacific/Honolulu', name: 'Hawaii-Aleutian Time Zone (HAST)' },
    { timezone: 'Pacific/Pago_Pago', name: 'Samoa Time Zone (SST)' },
    { timezone: 'Asia/Manila', name: 'Philippine Time Zone (PHT)' }
    // Add more timezones if needed
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom>
        US Time Zones
      </Typography>
      <Grid container spacing={3}>
        {timezones.map((tz, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TimezoneCard timezone={tz.timezone} timezoneName={tz.name} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;