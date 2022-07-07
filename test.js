const i='https://kinopoiskapiunofficial.tech//api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1'

// curl -X "GET" ^
//   "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1" ^
//   -H "accept: application/json" ^
//   -H "X-API-KEY: 6ed9f949-1a27-440b-a4dd-99593d4b2eab"
//   fetch()

fetch(
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1",
  {
    headers: {
      accept: "application/json",
      "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
      "sec-ch-ua": '"Chromium";v="102", " Not A;Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-api-key": "6ed9f949-1a27-440b-a4dd-99593d4b2eab",
      Referer: "https://kinopoiskapiunofficial.tech/documentation/api/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "GET",
  }
);then(res=>console.log(res))

