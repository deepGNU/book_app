import './BooksHeader.css';
import SearchBar from './SearchBar';
import BooksBtns from './BooksBtns';
import Filters from './Filters';

const BooksHeader = () => {
    return (
        <div className='books-header'>
            <SearchBar />
            <BooksBtns />
            <Filters />
        </div>
    );
};

export default BooksHeader;