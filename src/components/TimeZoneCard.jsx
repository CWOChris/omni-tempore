import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TimezoneCard = ({ timezone, timezoneName }) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: timezone, hour12: false }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { timeZone: timezone, hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, [timezone]);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {timezoneName}
        </Typography>
        <Typography variant="h5" component="h2">
          {currentTime}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TimezoneCard;