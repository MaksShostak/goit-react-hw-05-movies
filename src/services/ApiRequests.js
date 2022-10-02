import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'f52fb5605503f66e762d80f647488744',
};

const mediaType = { all: 'all', movie: 'movie', tv: 'tv', person: 'person' };
const timeWindow = { day: 'day', week: 'week' };

export async function getTrendingMedia(pageNamber) {
  const { data } = await axios.get(
    `trending/${mediaType.all}/${timeWindow.week}`,
    {
      params: {
        page: pageNamber,
      },
    }
  );

  return data.results;
}

export async function getSearchMovies(searchParam) {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query: searchParam,
    },
  });
  console.log(data);
  return data.results;
}

export async function getAllInfoMovies(movieId) {
  const { data } = await axios.get(`/movie/${movieId}`, {
    params: {
      movie_id: movieId,
    },
  });
  console.log(data);
  return data.results;
}

export async function getMoviesActorsCast(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      movie_id: movieId,
    },
  });
  console.log(data);
  return data.results;
}

export async function getMoviesReview(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      movie_id: movieId,
    },
  });
  console.log(data);
  return data.results;
}
