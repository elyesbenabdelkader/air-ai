from prompts.getCityAQI import getCityAQI
from utils.getCitiesArrayFromQuery import getCitiesArrayFromQuery


def getCitiesAQIFromQuery(query):
    citiesDictionary = {}

    if not query:
        return citiesDictionary

    citiesArray = getCitiesArrayFromQuery(query)

    for city in citiesArray:
        citiesDictionary[city] = getCityAQI(city)

    return citiesDictionary
