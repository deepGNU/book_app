import './BooksHeader.css';
import { useDispatch } from 'react-redux';
import { SlMagnifier as SearchIcon } from 'react-icons/sl';
import { changeQuery } from '../../features/books-slice';
import useFocus from '../../hooks/useFocus';

const SearchBar = () => {
    const ref = useFocus();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const queryValue = ref.current.value.trim();
        if (!queryValue) return;
        dispatch(changeQuery(queryValue));
        ref.current.value = '';
        ref.current.blur();
    };

    return (
        <form onSubmit={handleSubmit} className='search-bar'>
            <input
                type='text'
                placeholder='Search'
                ref={ref}
            />
            <button title='Search'>
                <SearchIcon />
            </button>
        </form>
    );
};

export default SearchBar;