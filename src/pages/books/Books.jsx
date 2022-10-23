import './Books.css';
import { useSelector } from "react-redux";
import BooksHeader from '../../components/booksheader/BooksHeader';
import BookItem from '../../components/bookitem/BookItem';

const Books = () => {
    const books = useSelector((s) => s.book.filteredBooks);

    return (
        <>
            <BooksHeader />

            <div className='books-div'>
                {books.map((b) =>
                    <BookItem key={b.id} book={b} />
                )}
            </div>
        </>
    );
};

export default Books;
