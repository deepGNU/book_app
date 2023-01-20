import './About.css';

const About = () => {
  return (
    <div className="about-div">
      <div className="about-txt">

        <h1>About Book App</h1>
        <p>
          This application is a book search platform that utilizes the Google Books API to retrieve information about books. It has a search bar at the top of the page where users can enter keywords to search for specific books. The search results are displayed in a grid format, with each book represented by its cover image, title, and author.
        </p>

        <p>
          Clicking on a book's cover image or title takes the user to a detailed view of the book, which includes information such as the publisher, publication date, and a brief summary of the book. Users can also see ratings and preview the book.
        </p>

        <p>
          The site also includes a filter feature that allows users to refine their search results. Users can filter the results by minimum rating, books published before a certain year, and books published after a certain year. This allows users to easily find books that match their specific criteria, such as finding books with a minimum rating of 4 stars or books published within a certain time frame. Users can access the filter option by clicking on a "Filters" button on the search results page. The filter options will be displayed at the top of the page, where users can select their desired criteria and then apply the filter to the search results.
        </p>

        <p>
          Users can add books to their personal favorites. This can be done by clicking on the heart-shaped button on the book. Users can view their favorite books by clicking on a "Favorites" link on the navigation bar.
        </p>

        <p>
          Users can edit details about books and add new books. However, it should be noted that any changes made to book information will only affect the front-end display of the website and will not be reflected on the Google Books API servers, as the website does not have control over those servers.
        </p>

        <p>
          Users can select multiple books and remove them at once. This can be done by first clicking on a "Select" button, which will activate the selection mode. Once in selection mode, users can click on each book they wish to select on the search results page or on the "Favorites" page. The selected books will be highlighted in a different color to indicate that they have been selected. Once the desired books have been selected, users can click on the "Delete" button to delete the books from the search results and from their favorites list. Users can also click on the "Cancel" button to deselect all the books. Users will be prompted to confirm the removal of the selected books before the action is executed. This feature makes it easy for users to quickly and efficiently manage their favorite books list.
        </p>

        <p>
          The site also includes keyboard shortcuts to make navigation more efficient. Pressing the "/" key will automatically focus the cursor on the search bar, allowing users to quickly begin searching for books. Additionally, when the user is in the form to edit or add a book, pressing the "esc" key will close the form and return the user to the previous view without saving any changes made.
        </p>

        <p>
          This web page is responsive, fast, and easy to navigate, making it a great resource for book lovers.
        </p>
      </div>
    </div>
  )
}

export default About