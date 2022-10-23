import './BooksHeader.css';
import { useSelector } from "react-redux";
import SearchBar from './SearchBar';
import Filters from './Filters';
import BooksBtns from './BooksBtns';

const BooksHeader = () => {
    const showFilters = useSelector((s) => s.mode.showFilters);

    return (
        <div className='books-header'>
            <BooksBtns />
            {showFilters && <Filters />}
            <SearchBar />
        </div>
    );
};

export default BooksHeader;