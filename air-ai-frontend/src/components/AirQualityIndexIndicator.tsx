import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ReactSpeedometer, { Transition } from "react-d3-speedometer";
import Typography from '@mui/material/Typography';

import getSpeedometerSegmentValueFormatter from '../utils/getSpeedometerSegmentValueFormatter';
import getSpeedometerValueFromAirQualityIndex from '../utils/getSpeedometerValueFromAirQualityIndex';

const CUSTOM_SEGMENTS_STOPS = [0, 100, 200, 300, 400, 500, 600];
const SEGMENT_COLORS = ["#4caf50", "#ffeb3b", "#ff9800", "#f44336", "#d32f2f", "#b71c1c"];

interface AirQualityIndexIndicatorProps {
    airQualityIndex: number | null;
    city: string;
}

function AirQualityIndexIndicator(props: AirQualityIndexIndicatorProps) {
    // Properties
    const { airQualityIndex, city } = props;

    // Variables
    let mainContent;

    if (airQualityIndex === null) {
        mainContent = <Alert severity="error">We could not get the air quality index, please try again.</Alert>;
    } else {
        const value = getSpeedometerValueFromAirQualityIndex(airQualityIndex);

        mainContent = <ReactSpeedometer
            width={400}
            paddingVertical={20}
            paddingHorizontal={20}
            needleHeightRatio={0.7}
            value={value}
            currentValueText={String(airQualityIndex)}
            minValue={0}
            maxValue={600}
            customSegmentStops={CUSTOM_SEGMENTS_STOPS}
            segmentColors={SEGMENT_COLORS}
            segmentValueFormatter={getSpeedometerSegmentValueFormatter()}
            labelFontSize="25"
            needleColor="#424242"
            needleTransitionDuration={3333}
            needleTransition={Transition.easeElastic}
        />
    }

    return (
        <Card className="AirQualityIndexIndicator">
            <CardContent>
                <Typography variant='h4'>{city}</Typography>
                {mainContent}
            </CardContent>
        </Card>
    );
}

export default AirQualityIndexIndicator;

