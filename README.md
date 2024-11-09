# DYLIT.UK API
## Introduction
This is an API for my website [doyouliveinthe.uk][dylit.uk] (DYLIT.UK), made in Deno!

# Endpoints
## MyInstants
An unofficial API for the [MyInstants](https://myinstants.com) soundboard site.

- Base URL: `/myinstants`
- Default Response:

    ```json
    {
      "data": [
        {
          "name": "Sound Name",
          "soundURL": "https://myinstants.com/media/sounds/sound.mp3"
        }
      ],
      "count": 20
    }
    ```

### GET `/trending`
Returns a list of the top trending sounds.

Query Parameters:
- `page` (optional): The page number to return. Default is `1`.
- `region` (optional): The region to get the trending sounds from. Default is `gb`.

### GET `/search`
Searches for sounds.

Query Parameters:
- `query`: The query to search for.
- `page` (optional): The page number to return. Default is `1`.

[dylit.uk]: https://doyouliveinthe.uk
