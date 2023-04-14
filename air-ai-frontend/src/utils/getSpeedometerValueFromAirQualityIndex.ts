function getSpeedometerValueFromAirQualityIndex(airQualityIndex: number): number {
    if(airQualityIndex <= 200) return Math.floor((airQualityIndex / 50) * 100);

    if(airQualityIndex <= 300) return 400 + Math.floor(((airQualityIndex - 200) / 100) * 100);

    return 500 + Math.floor(((airQualityIndex - 300) / 200) * 100);
}

export default getSpeedometerValueFromAirQualityIndex;
