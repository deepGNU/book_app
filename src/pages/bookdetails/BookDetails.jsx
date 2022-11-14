import './BookDetails.css';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoCaretBack } from 'react-icons/io5';

const BookDetails = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const book = useSelector((s) => s.book.books).find((b) => b.id === bookId);

    if (!book) {
        return <Navigate to='/books' />;
    }

    const languageName = new Intl.DisplayNames(['en'], { type: 'language' });

    return (
        <div className='book-details-div'>
            <button
                title='Go Back'
                className='btn btn-back'
                onClick={() => navigate(-1)}
            >
                <IoCaretBack /> 
                Back
            </button>

            {book.volumeInfo.imageLinks && <img className='img-details' src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover" />}

            <div className="text-details">
                <h1>{book.volumeInfo.title}</h1>
                <h2>{book.volumeInfo.subtitle}</h2>
                <p>Authors: {book.volumeInfo.authors}</p>
                <p>Desciption: {book.volumeInfo.description ?? "unavailable."}</p>
                <p>Publisher: {book.volumeInfo.publisher ?? "unavailable."}</p>
                <p>Published date: {book.volumeInfo.publishedDate ?? "unavailable."}</p>
                <p>Language: {languageName.of(book.volumeInfo.language) ?? "unavailable."}</p>
            </div>

            <div className='btns-details'>
                <a href={book.volumeInfo.previewLink ?? "unavailable."}>Preview at Google Books</a>
                <br />
                <a href={book.volumeInfo.infoLink ?? "unavailable."}>Info at Google Books</a>
                {book.saleInfo.isEbook &&
                    <>
                        {book.accessInfo.epub.isAvailable &&
                            <a href={book.accessInfo.epub.downloadLink}>
                                Download EPUB
                            </a>}
                        <br />
                        {book.accessInfo.pdf.isAvailable &&
                            <a href={book.accessInfo.pdf.downloadLink}>
                                Download PDF
                            </a>}
                    </>
                }
            </div>
        </div>
    );
};

export default BookDetails;