import "./AirQualityIndexIndicators.css";

import Alert from "@mui/material/Alert";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

import AirQualityIndexIndicator from './AirQualityIndexIndicator';
import { CitiesAQIObject } from "../api/getCitiesAQI";

interface AirQualityIndexIndicatorsProps {
    isLoading: boolean;
    citiesAQI: CitiesAQIObject | undefined;
}

function AirQualityIndexIndicators(props: AirQualityIndexIndicatorsProps) {
    // Properties
    const { citiesAQI, isLoading } = props;

    if (isLoading) {
        return (
            <Box className="AirQualityIndexIndicators--loading">
                <CircularProgress />
            </Box>
        );
    }

    if (citiesAQI === undefined) return null;

    if (Object.keys(citiesAQI).length === 0) {
        return (
            <Alert variant="outlined" severity="error">
                The query did not return any result.
            </Alert>
        );
    }

    return (
        <Stack
            useFlexGap
            className="AirQualityIndexIndicators"
            direction="row"
            spacing={2}
            flexWrap="wrap"
            justifyContent="center">
            {
                Object.entries(citiesAQI).map(([city, airQualityIndex]) => {
                    return <AirQualityIndexIndicator key={city} airQualityIndex={airQualityIndex} city={city} />
                })
            }
        </Stack>
    );
}

export default AirQualityIndexIndicators;

