from langchain.prompts import PromptTemplate

from prompts.evaluatePrompt import evaluatePrompt

LIST_SEPERATOR_CHARACTER = ";"
NOT_AVAILABLE_STRING = "n/a"


def extractCitiesStringListFromResponse(response):
    template = "list the cities mentioned in this sentence seperated by '{list_seperator_character}': '{response}' (if no cities were found return '{not_available_string}')"
    prompt = PromptTemplate(
        input_variables=[
            "response",
            "list_seperator_character",
            "not_available_string",
        ],
        template=template,
    )
    formattedPrompt = prompt.format(
        response=response,
        list_seperator_character=LIST_SEPERATOR_CHARACTER,
        not_available_string=NOT_AVAILABLE_STRING,
    )

    return evaluatePrompt(formattedPrompt)
