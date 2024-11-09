# DYLIT.UK API
## Introduction
This is an API for the website [doyouliveinthe.uk][dylit.uk] (DYLIT.UK)

# Endpoints
## MyInstants
- Base URL: `/myinstants`

### GET /trending
Returns a list of the top trending sounds.
Query Parameters:
- `page` (optional): The page number to return. Default is 1.
- `region` (optional): The region to get the trending sounds from. Default is `gb`.

### GET /search
Searches for sounds.
Query Parameters:
- `query`: The query to search for.
- `page` (optional): The page number to return. Default is 1.

[dylit.uk]: https://doyouliveinthe.uk
