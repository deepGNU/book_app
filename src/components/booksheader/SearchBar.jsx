import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SlMagnifier } from 'react-icons/sl';
import { changeQuery } from '../../features/books-slice';
import useFocus from '../../hooks/useFocus';

const SearchBar = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('search_query');
    const dispatch = useDispatch();
    const ref = useFocus();

    useEffect(() => {
        dispatch(changeQuery(query));
    }, [dispatch, query]);

    return (
            <form action="/" method="get" className='search-bar'>
                <input
                    name='search_query'
                    id='search'
                    type="text"
                    placeholder='Search'
                    ref={ref}
                />
                <button title='Search'>
                    <SlMagnifier />
                </button>
            </form>
    );
};

export default SearchBar;