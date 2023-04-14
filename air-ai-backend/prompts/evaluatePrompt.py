from langchain.llms import OpenAI


def evaluatePrompt(prompt):
    llm = OpenAI(temperature=0)

    return llm(prompt)
