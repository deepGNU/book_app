import './BooksHeader.css';
import SearchBar from './SearchBar';
import Filters from './Filters';
import BooksBtns from './BooksBtns';

const BooksHeader = () => {
    return (
        <div className='books-header'>
            <div className='top-books-header'>
                <SearchBar />
                <BooksBtns />
            </div>
            <Filters />
        </div>
    );
};

export default BooksHeader;