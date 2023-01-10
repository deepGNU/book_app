import './Books.css';
import { useSelector } from "react-redux";
import BooksHeader from '../../components/booksheader/BooksHeader';
import LoaderSpinner from '../../components/loaderspinner/LoaderSpinner';
import Book from '../../components/book/Book';

const Books = () => {
    const loading = useSelector((s) => s.book.loading);
    const books = useSelector((s) => s.book.filteredBooks);

    return (
        <>
            <BooksHeader />
            {loading && <LoaderSpinner />}

            <div className='books-div'>
                {books.map((b) =>
                    <Book key={b.id} book={b} />
                )}
            </div>
        </>
    );
};

export default Books;
