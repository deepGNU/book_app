import './BooksHeader.css';
import SearchBar from './SearchBar';
import Buttons from './BooksHeaderBtns';
import Filters from './Filters';

const BooksHeader = () => {
    return (
        <div className='books-header'>
            <SearchBar />
            <Buttons />
            <Filters />
        </div>
    );
};

export default BooksHeader;