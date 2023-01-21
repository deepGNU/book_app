import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SlMagnifier as SearchIcon } from 'react-icons/sl';
import { changeQuery } from '../../features/books-slice';
import useFocus from '../../hooks/useFocus';

const SearchBar = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('search_query');
    const dispatch = useDispatch();
    const ref = useFocus();
    const location = useLocation();

    useEffect(() => {
        dispatch(changeQuery(query));
    }, [dispatch, query]);

    return (
        <form action={location.pathname} method='get' className='search-bar'>
            <input
                name='search_query'
                id='search'
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