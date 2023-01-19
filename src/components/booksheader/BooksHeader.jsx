import './BooksHeader.css';
import SearchBar from './SearchBar';
import Filters from './Filters';
import BooksBtns from './BooksBtns';

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