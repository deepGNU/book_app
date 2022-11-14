import './Books.css';
import { useSelector } from "react-redux";
import BooksHeader from '../../components/booksheader/BooksHeader';
import BookItem from '../../components/bookitem/BookItem';
import LoaderSpinner from '../../components/loaderspinner/LoaderSpinner';

const Books = () => {
    const loading = useSelector((s) => s.book.loading);
    const books = useSelector((s) => s.book.filteredBooks);

    return (
        <>
            <BooksHeader />
            {loading && <LoaderSpinner />}

            <div className='books-div'>
                {books.map((b) =>
                    <BookItem key={b.id} book={b} />
                )}
            </div>
        </>
    );
};

export default Books;
