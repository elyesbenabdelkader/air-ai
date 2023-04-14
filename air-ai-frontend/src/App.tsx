import './App.css';

import React from 'react';
import Stack from '@mui/material/Stack';

import PromptUI from './components/PromptUI';
import AirQualityIndexIndicators from './components/AirQualityIndexIndicators';
import getCitiesAQI, { CitiesAQIObject } from './api/getCitiesAQI';
import Typography from '@mui/material/Typography';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [citiesAQI, setCitiesAQI] = React.useState<CitiesAQIObject | undefined>(undefined);

  const handleOnSubmit = (query: string) => {
    setIsLoading(true);
    getCitiesAQI(query)
      .then((CitiesAQIObject) => {
        setCitiesAQI(CitiesAQIObject);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Stack spacing={2} alignItems={"center"}>
      <Typography variant="h1">AirAI</Typography>
      <PromptUI disabled={isLoading} onSubmit={handleOnSubmit} />
      <AirQualityIndexIndicators isLoading={isLoading} citiesAQI={citiesAQI} />
    </Stack>
  );
}

export default App;
