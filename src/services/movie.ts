const apiKey: string = process.env.NEXT_PUBLIC_TMDB_MOVIE_ACCESS_TOKEN || "";
const apiKey2: string = process.env.NEXT_PUBLIC_MOVIE_API_KEY || "";

export const getMovie = async ({ date }: { date: string }) => {
  try {
    const response = await fetch(
      `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey2}&targetDt=${date}`
    );
    if (response.ok) {
      const movieData = await response.json();
      return movieData;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getNowPlayingMovie = async (page: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    if (response.ok) {
      const movieData = await response.json();
      return movieData;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getMovieTopRated = async (page: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=ko&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    if (response.ok) {
      const movieData = await response.json();
      return movieData;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getPopularMovie = async (page: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=ko&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    if (response.ok) {
      const movieData = await response.json();
      return movieData;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getSearchMovie = async (query: string, page: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=ko&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    if (response.ok) {
      const movieData = await response.json();
      return movieData;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getMovieById = async (id: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=ko`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    if (response.ok) {
      const movieData = await response.json();
      return movieData;
    }
  } catch (error) {
    console.error(error);
  }
};
