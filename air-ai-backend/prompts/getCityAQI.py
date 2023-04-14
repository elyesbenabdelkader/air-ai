from langchain.prompts import PromptTemplate

from prompts.evaluatePrompt import evaluatePrompt
from utils.getAQIFromResponse import getAQIFromResponse


def getCityAQI(city):
    template = "what is the air quality index value in {city}? (shortest answer)"
    prompt = PromptTemplate(
        input_variables=["city"],
        template=template,
    )
    formattedPrompt = prompt.format(city=city)
    response = evaluatePrompt(formattedPrompt)

    return getAQIFromResponse(response)
