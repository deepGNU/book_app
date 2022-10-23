import './BooksHeader.css';
import SearchBar from './SearchBar';
import Filters from './Filters';
import BooksBtns from './BooksBtns';

const BooksHeader = () => {
    return (
        <div className='books-header'>
            <BooksBtns />
            <Filters />
            <SearchBar />
        </div>
    );
};

export default BooksHeader;