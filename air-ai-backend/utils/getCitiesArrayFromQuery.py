from prompts.evaluatePrompt import evaluatePrompt
from prompts.extractCitiesStringListFromResponse import (
    extractCitiesStringListFromResponse,
)
from utils.parseCitiesStringList import parseCitiesStringList


def getCitiesArrayFromQuery(query):
    response = evaluatePrompt(query)
    citiesStringList = extractCitiesStringListFromResponse(response)

    return parseCitiesStringList(citiesStringList)
