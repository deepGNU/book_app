import './Books.css';
import { useSelector } from "react-redux";
import BooksHeader from '../../components/books-header/BooksHeader';
import LoaderSpinner from '../../components/loaderspinner/LoaderSpinner';
import Book from '../../components/book/Book';
import useError from '../../hooks/useError';

const Books = () => {
    const loading = useSelector((s) => s.book.loading);
    const selecting = useSelector((s) => s.mode.selecting);
    const books = useSelector((s) => s.book.filteredBooks);
    useError();

    return (
        <>
            <BooksHeader />
            {loading && <LoaderSpinner />}

            <div className='books-div'>
                {books.length > 0 ? books.map((book) => (
                    <Book key={book.id} book={book} isOnSelectingMode={selecting} />
                )) : !loading && (<h1>No books to show.</h1>)}
            </div>
        </>
    );
};

export default Books;
