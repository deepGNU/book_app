import './About.css';
// import Login from '../../components/login/login';
// import Logout from '../../components/login/logout';
// import { useEffect } from 'react';
// import { gapi } from 'gapi-script';
const clientId = "528016079817-l5sn7f0edjuq3qr7qmj83egp5bv5pdbc.apps.googleusercontent.com";

const About = () => {
  // useEffect(() => {
  //   const start = () => {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //     })
  //   };

  //   gapi.load('client:auth2', start);
  // });

  // var accessToken = gapi.auth.getToken().access_token;

  return (
    <div className="about-div">
      {/* <Login /> */}
      {/* <Logout /> */}
      <h1>About</h1>
      <p>
        This application demonstrates front end functionality for a book application, using the Google Books API.
      </p>

      <p>
        You can search for books, edit their details, add books, add them to favorites, and delete them.
      </p>

      <h2>Shortcuts</h2>
      <p>
          <span className="bold">/</span>
          Go to search bar.
      </p>
    </div>
  )
}

export default About