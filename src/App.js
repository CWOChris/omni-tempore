import React from "react";
import { Container, Grid } from "@mui/material";
import TimeZoneCard from "./components/TimeZoneCard";

const timezones = [
  { timezone: 'America/New_York', timezoneName: 'Eastern Time Zone (EST)' },
  { timezone: 'America/Chicago', timezoneName: 'Central Time Zone (CST)' },
  { timezone: 'America/Denver', timezoneName: 'Mountain Time Zone (MST)' },
  { timezone: 'America/Los_Angeles', timezoneName: 'Pacific Time Zone (PST)' },
  { timezone: 'America/Anchorage', timezoneName: 'Alaska Time Zone (AKST)' },
  { timezone: 'Pacific/Honolulu', timezoneName: 'Hawaii-Aleutian Time Zone (HST)' },
  { timezone: 'Pacific/Midway', timezoneName: 'Samoa Time Zone (SST)' },
  { timezone: 'Philipines', timezoneName: 'Philippine Time Zone (PHT)' },
];

function App() {
  return (
    <Container>
      <Grid container spacing={3}>
        {timezones.map((tz, index) => (
          <Grid>
            <TimeZoneCard timezone={tz.timezone} timezoneName={tz.timezoneName} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;