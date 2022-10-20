import './Books.css';
import { useSelector } from "react-redux";
import TopBar from '../../components/topbar/TopBar';
import BookItem from '../../components/bookitem/BookItem';

const Books = () => {
    const books = useSelector((s) => s.book.filteredBooks);

    return (
        <>
            <TopBar />

            <div className='books-div'>
                {books.map((b) =>
                    <BookItem key={b.id} book={b} />
                )}
            </div>
        </>
    );
};

export default Books;
