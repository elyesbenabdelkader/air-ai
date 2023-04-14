export interface CitiesAQIObject {
    [city: string]: number | null;
}

function getCitiesAQI(query: string): Promise<CitiesAQIObject> {
    const encodedQuery = encodeURIComponent(query);
    const url = `/api?q=${encodedQuery}`;

    return fetch(url)
        .then(response => response.json());
}

export default getCitiesAQI;
