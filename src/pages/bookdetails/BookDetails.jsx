import './BookDetails.css';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoCaretBack as BackIcon } from 'react-icons/io5';
import iso6391 from 'iso-639-1';
import BookBtns from '../../components/book/BookBtns';

const BookDetails = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const book = useSelector((s) => [...s.book.books, ...s.favorite.favBooks]).find((b) => b.id === bookId);

    if (!book) {
        return <Navigate to={-1} />;
    }

    return (
        <div className='book-details-div'>
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
                <h1>{book.volumeInfo?.title}</h1>
                <h2>{book.volumeInfo?.subtitle}</h2>
                <p>Authors: {book.volumeInfo?.authors ?? "unavailable."}</p>
                <p>Description: {book.volumeInfo?.description ?? "unavailable."}</p>
                <p>Publisher: {book.volumeInfo?.publisher ?? "unavailable."}</p>
                <p>Published Date: {book.volumeInfo?.publishedDate ?? "unavailable."}</p>
                <p>Language: {(book.volumeInfo?.language && iso6391.getName(book.volumeInfo.language)) ?? "unavailable."}</p>
                <p>Average Rating: {book.volumeInfo?.averageRating ?? "unavailable"}</p>

                <div className="btns-details">
                    <BookBtns className='details-book-btns' book={book} />
                    {book.volumeInfo?.previewLink &&
                        <a href={book.volumeInfo.previewLink}>Preview at Google Books</a>}
                    <br />
                    {book.volumeInfo?.infoLink &&
                        <a href={book.volumeInfo.infoLink}>Info at Google Books</a>}
                    <br />
                    {book.accessInfo?.epub?.downloadLink &&
                        <a href={book.accessInfo?.epub?.downloadLink}>Download EPUB</a>}
                    <br />
                    {book.accessInfo?.pdf?.downloadLink &&
                        <a href={book.accessInfo.pdf.downloadLink}>Download PDF</a>}
                </div>
            </div>
        </div>
    );
};

export default BookDetails;