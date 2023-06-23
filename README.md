<div align="center">
    <h2>⚜️ V I T E + R E A C T &nbsp; P R O J E C T ⚜️</h2>
</div>

<br>

# React Application

This repository contains a React application that includes a navigation component and two pages: Home and Tweets.

## Installation

#### 1. Clone the repository:

   ```bash
   git clone https://github.com/postalman/tech-part-hw.git
   ```

#### 2. Install the dependencies:

  ```bash
  cd your-repository
  npm install
  ```

#### 3. Start the development server:

  ```bash
  npm start
  ```
## Usage

#### The application uses React Router for page navigation. The main entry point of the application is the App component defined in App.jsx. It sets up the routes and renders the Navigation component and the corresponding page components based on the current route.

## Routes

#### '/' - Home page (Home component)
#### '/tweets' - Tweets page (Tweets component)
#### '/*' - Redirects to the Home page

## Navigation

#### The navigation component (Navigation.jsx) is displayed at the top of the application. It uses the Link component from React Router to provide links to the Home and Tweets pages. The current active page is highlighted based on the current route.

## Home Page

#### The Home page (Home.jsx) displays a simple welcome message.

## Tweets Page

#### The Tweets page (Tweets.jsx) fetches data from a mock API endpoint using Axios. It displays a list of users and their tweets. Users can be followed or unfollowed by clicking on the corresponding buttons. The number of followers and the filtering options are also provided.

