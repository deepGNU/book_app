import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SlMagnifier } from 'react-icons/sl';
import { changeQuery } from '../../features/books-slice';

const SearchBar = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('search_query');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeQuery(query));
    }, [query]);

    return (
            <form action="/" method="get" className='search-bar'>
                <input
                    name='search_query'
                    id='search'
                    type="text"
                    placeholder='Search'
                />
                <button title='Search'>
                    <SlMagnifier />
                </button>
            </form>
    );
};

export default SearchBar;