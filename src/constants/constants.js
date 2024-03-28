export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const LOGIN_PAGE_BG_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/68282393?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "russian", name: "Russian" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "japanse", name: "Japanse" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const NETFLIX_LOGO =
  "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940";

export const NAVBAR = [
  {
    tabName: "Home",
    routeUrl: "/browse",
  },
  {
    tabName: "TV Shows",
    routeUrl: "/tv-shows",
  },
  {
    tabName: "Movies",
    routeUrl: "/browse",
  },
  {
    tabName: "New & Popular",
    routeUrl: "/popular",
  },
];
