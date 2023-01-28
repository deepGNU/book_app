import './BookDetails.css';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoCaretBack as BackIcon } from 'react-icons/io5';
import iso6391 from 'iso-639-1';
import BookButtons from '../../components/book-buttons/BookButtons';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const path = useLocation().pathname;
    const book = useSelector((s) =>
        path.includes('books') ? s.book.books : s.book.favoriteBooks)
        .find((b) => b.id === bookId);

    if (!book) return <Navigate to={path.replace(`/${bookId}`, '')} />;

    return (
        <div className={`book-details-div`}>
            <button
                title='Go Back'
                className='btn btn-back'
                onClick={() => navigate(-1)}
            >
                <BackIcon />
            </button>

            {book.volumeInfo?.imageLinks?.thumbnail &&
                <img className='img-details' src={book.volumeInfo?.imageLinks?.thumbnail} alt="Book Cover" />}

            <div className="text-details">
                <h1><i>{book.volumeInfo?.title ?? "Untitled"}</i></h1>
                <h2><i>{book.volumeInfo?.subtitle}</i></h2>
                <p>Authors: {book.volumeInfo?.authors ?? "unavailable."}</p>
                <p>Description: {book.volumeInfo?.description ?? "unavailable."}</p>
                <p>Publisher: {book.volumeInfo?.publisher ?? "unavailable."}</p>
                <p>Published Date: {book.volumeInfo?.publishedDate ?? "unavailable."}</p>
                <p>Language: {(book.volumeInfo?.language && iso6391.getName(book.volumeInfo.language)) ?? "unavailable."}</p>
                <p>Average Rating: {book.volumeInfo?.averageRating ?? "unavailable"}</p>

                <div className="btns-details">
                    <BookButtons className='details-book-btns' book={book} />
                    {book.volumeInfo?.previewLink &&
                        <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Preview at Google Books</a>}
                    <br />
                    {book.volumeInfo?.infoLink &&
                        <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">Info at Google Books</a>}
                    <br />
                    {book.accessInfo?.epub?.downloadLink &&
                        <a href={book.accessInfo?.epub?.downloadLink} target="_blank" rel="noopener noreferrer">Download EPUB</a>}
                    <br />
                    {book.accessInfo?.pdf?.downloadLink &&
                        <a href={book.accessInfo.pdf.downloadLink} target="_blank" rel="noopener noreferrer">Download PDF</a>}
                </div>
            </div>
        </div>
    );
};

export default BookDetails;