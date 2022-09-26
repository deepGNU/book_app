import './BookDetail.css';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const book = useSelector((s) => s.book.books).find((b) => b.id === bookId);

    if (!book) {
        return <Navigate to='/books' />;
    }

    return (
        <div className='book-details-div'>
            <h1>{book.volumeInfo.title}</h1>
            <h2>{book.volumeInfo.subtitle}</h2>
            {book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover" />}
            <p>Authors: {book.volumeInfo.authors}</p>
            <p>Desciption: {book.volumeInfo.description ?? "unavailable."}</p>
            <p>Publisher: {book.volumeInfo.publisher ?? "unavailable."}</p>
            <p>Published date: {book.volumeInfo.publishedDate ?? "unavailable."}</p>
            <p>Language: {book.volumeInfo.language ?? "unavailable."}</p>
            <div>
                <a href={book.volumeInfo.previewLink ?? "unavailable."}>Preview at Google Books</a>
                <br />
                <a href={book.volumeInfo.infoLink ?? "unavailable."}>Info at Google Books</a>
            </div>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default BookDetails;