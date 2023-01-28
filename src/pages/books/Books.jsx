import './Books.css';
import { useDispatch, useSelector } from "react-redux";
import BooksHeader from '../../components/books-header/BooksHeader';
import LoaderSpinner from '../../components/loader-spinner/LoaderSpinner';
import Book from '../../components/book/Book';
import useError from '../../hooks/useError';
import { toggleSelectedInBooks } from '../../features/books-slice';

const Books = () => {
    const dispatch = useDispatch();
    const loading = useSelector((s) => s.book.loading);
    const selecting = useSelector((s) => s.mode.selecting);
    const { filterMinRating, filterDateAfter, filterDateBefore } = useSelector((s) => s.mode);
    const filter = (book) =>
        (!filterMinRating || book.volumeInfo?.averageRating >= filterMinRating) &&
        (!filterDateAfter || book.volumeInfo?.publishedDate >= filterDateAfter) &&
        (!filterDateBefore || book.volumeInfo?.publishedDate <= filterDateBefore);
    const books = useSelector((s) => s.book.books).filter(filter);
    const isFilterOn = filterMinRating || filterDateAfter || filterDateBefore;
    useError();

    const toggleSelected = (id) => {
        dispatch(toggleSelectedInBooks(id));
    };

    return (
        <>
            <BooksHeader />
            {isFilterOn && <h1 className='books-h1'>Filtered Results</h1>}

            {loading ? <LoaderSpinner /> : (
                <div className={`books-div`}>
                    {books.length > 0 ? books.map((book) => (
                        <Book key={book.id} book={book} selecting={selecting} toggleSelected={toggleSelected} />
                    )) : (<h1 className='books-h1'>No books to show.</h1>)}
                </div>
            )}
        </>
    );
};

export default Books;
