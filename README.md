# Deployed Live App

- https://netflixgpt-fc694.web.app

# Netflix GPT

- Create React App
- Install/Configured Tailwind Css
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validations , useRef hook -to reference a tag/Element in a web page.
- Authentication - Google Firebase setup
  - firebase login
  - firebase init
  - firebase deploy
- Integrate Authentication API for Sign In/Up
- Add user's data in Redux store
- Implemented sign out/ updated profile
- Bug Fix - if the user is not logged in Redirect /browse to login Page and vice-versa.
- Unscubscribed to the OnAuthStateChanged callback.
- Add hardcoded values to the constant file
- TMDB Configuration | Access data
- Boiler plate for Browse
  -Main Video Container
  - video BG - video title
    -Secondary Container
  - each row has specific category of movie list (Movie \* N)
  - cards \* N
- Promotes Seperation of concerns - modular coding
- Boilerplate for MainContainer & Secondary Container
- Fetch data for trailer video data & updated the store
- Building Secondary Container
  - Movie List - Popular
  - Movie List - Now Playing
  - Movie List - Trending
  - Movie List - UpComing
- Created custom hooks for every set of movie list and their resp category.
- Fixed style issues
- GPT Integration - seperate Slice to handle resp state variables
- GPT Search bar, GPT Movie Suggestion
- Multi-lang Feature Added
- Integrate GPT API's
- Reduced unnecessary multiple API calls through memoization - optimized component re-render
- Enhanced features in APP by carousel implementation,navbar fixes and route fixes.

# Features

- Home Page - For Not logged In User
  - Login/Sign Up
    - Sign In/ Sign Up Form
    - redirect to Browse Page

-Browse Page - For Logged In User (Post Authentication)

- Header
- Main Movie

  - Trailer in Background
  - Movie Title & Description
  - Movie Suggestions
    - Movies List \* N

- NetFlixGPT
  - Search Bar
  - movie Suggestions
