from prompts.extractCitiesStringListFromResponse import (
    LIST_SEPERATOR_CHARACTER,
    NOT_AVAILABLE_STRING,
)


def parseCitiesStringList(citiesStringList):
    return [
        city.strip()
        for city in citiesStringList.split(LIST_SEPERATOR_CHARACTER)
        if city.strip() and city.strip().lower() != NOT_AVAILABLE_STRING
    ]
