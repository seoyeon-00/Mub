export const getMovie = async ({ date }: { date: string }) => {
  try {
    const apiKey: string = process.env.MOVIE_API_KEY || "";
    const response = await fetch(
      `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${date}`
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
  const apiKey: string = process.env.TMDB_MOVIE_ACCESS_TOKEN || "";

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
  const apiKey: string = process.env.TMDB_MOVIE_ACCESS_TOKEN || "";

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
  const apiKey: string = process.env.TMDB_MOVIE_ACCESS_TOKEN || "";

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
