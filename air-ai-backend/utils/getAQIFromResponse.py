def getAQIFromResponse(response):
    response = response.strip()

    try:
        number = int(response)
    except ValueError:
        return None

    return number
