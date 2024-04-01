import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    currentlySelectedMovie: {
      adult: false,
      backdrop_path: "/mmpnUZebJhFXewEUuP7OGM4GuNF.jpg",
      belongs_to_collection: null,
      budget: 40000000,
      genres: [
        {
          id: 878,
          name: "Science Fiction",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 18,
          name: "Drama",
        },
      ],
      homepage: "https://www.netflix.com/title/81301595",
      id: 636706,
      imdb_id: "tt11097384",
      original_language: "en",
      original_title: "Spaceman",
      overview:
        "During a research mission, an astronaut discovers that his marriage is in trouble. Luckily, he has the help of a mysterious creature hidden in his ship.",
      popularity: 347.822,
      poster_path: "/f46WvKEsBn98WJbPJcO47ZoKn6B.jpg",
      production_companies: [
        {
          id: 57743,
          logo_path: "/fon2TaTj6WU8kVfAmlHsvpPdt2p.png",
          name: "Free Association",
          origin_country: "US",
        },
        {
          id: 168181,
          logo_path: "/adHpT0fRW86W80jPtJRo96pqJE4.png",
          name: "Tango Entertainment",
          origin_country: "US",
        },
        {
          id: 197828,
          logo_path: null,
          name: "Sinestra",
          origin_country: "US",
        },
      ],
      production_countries: [
        {
          iso_3166_1: "US",
          name: "United States of America",
        },
      ],
      release_date: "2024-02-23",
      revenue: 0,
      runtime: 108,
      spoken_languages: [
        {
          english_name: "English",
          iso_639_1: "en",
          name: "English",
        },
        {
          english_name: "Czech",
          iso_639_1: "cs",
          name: "Český",
        },
        {
          english_name: "Korean",
          iso_639_1: "ko",
          name: "한국어/조선말",
        },
      ],
      status: "Released",
      tagline: "I just want to go home.",
      title: "Spaceman",
      video: false,
      vote_average: 6.824,
      vote_count: 485,
    },
    tvShows: null,
    loadTraileronClick: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPresentMovie: (state, action) => {
      state.currentlySelectedMovie = action.payload;
    },
    addTVShows: (state, action) => {
      state.tvShows = action.payload;
    },
    updateTrailer: (state, action) => {
      state.loadTraileronClick = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
  addPresentMovie,
  addTVShows,
  updateTrailer,
} = movieSlice.actions;
export default movieSlice.reducer;
