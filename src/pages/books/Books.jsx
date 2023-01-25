import './Books.css';
import { useDispatch, useSelector } from "react-redux";
import BooksHeader from '../../components/books-header/BooksHeader';
import LoaderSpinner from '../../components/loaderspinner/LoaderSpinner';
import Book from '../../components/book/Book';
import useError from '../../hooks/useError';
import { toggleSelectedInBooks } from '../../features/books-slice';

const Books = () => {
    const dispatch = useDispatch();
    const loading = useSelector((s) => s.book.loading);
    const selecting = useSelector((s) => s.mode.selecting);
    const books = useSelector((s) => s.book.filteredBooks);
    const showingFilters = useSelector((s) => s.mode.showFilters);
    const { filterMinRating, filterDateAfter, filterDateBefore } = useSelector((s) => s.mode);
    const displayMessage = !showingFilters && (filterMinRating || filterDateAfter || filterDateBefore);
    useError();

    const toggleSelected = (id) => {
        dispatch(toggleSelectedInBooks(id));
    };

    return (
        <>
            <BooksHeader />
            {loading && <LoaderSpinner />}
            {displayMessage && <h1>Filtered Results</h1>}

            <div className='books-div'>
                {books.length > 0 ? books.map((book) => (
                    <Book key={book.id} book={book} selecting={selecting} toggleSelected={toggleSelected} />
                )) : !loading && (<h1>No books to show.</h1>)}
            </div>
        </>
    );
};

export default Books;
