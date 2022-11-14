import './About.css';

const About = () => {
  return (
    <div className="about-div">
      <h1>About</h1>
      <p>
        This application demonstrates front end functionality for a book application, using the Google Books API.
      </p>

      <p>
        You can search for books, edit their details, add books, add them to favorites, and delete them.
      </p>

      <h2>Shortcuts</h2>
      <p>
        <div>
          <span className="bold">/</span>
          Go to search bar.
        </div>
      </p>
    </div>
  )
}

export default About