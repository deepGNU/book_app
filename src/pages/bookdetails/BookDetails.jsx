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
        <>
            <h1>{book.volumeInfo.title}</h1>
            <h2>{book.volumeInfo.subtitle}</h2>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            <p>{book.volumeInfo.description}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </>
    );
};

export default BookDetails;