import { useDispatch, useSelector } from 'react-redux';
import { ImFilter } from 'react-icons/im';
import {ImMenu3 as MenuDropDown, ImMenu4 as MenuDropUp} from 'react-icons/im';
import { toggleSelectMode, toggleAddMode, toggleShowFilters } from '../../features/mode-slice';
import { cancelSelection, deleteSelected } from '../../features/books-slice';
import { removeFavorite } from '../../features/favorites-slice';
import { useState } from 'react';

const BooksBtns = () => {
    const dispatch = useDispatch();
    const selecting = useSelector((s) => s.mode.selecting);
    const numSelected = useSelector((s) => s.book.numSelected);
    const showFilters = useSelector((s) => s.mode.showFilters);
    const books = useSelector((s) => s.book.books);
    const [menuIsCollapsed, setMenuIsCollapsed] = useState(true);

    const getCollapseClass = () => (menuIsCollapsed && !selecting) ? 'btns-collapsed' : '';

    const handleSelectClick = () => {
        if (selecting) dispatch(cancelSelection());
        if (showFilters) dispatch(toggleShowFilters());
        dispatch(toggleSelectMode());
    };

    const handleDeleteClick = () => {
        if (window.confirm(`Are you sure you want to delete ${numSelected > 1 ? numSelected + ' items' : 'item'}?`)) {
            for (const b of books.filter((b) => b.isSelected))
                dispatch(removeFavorite(b.id));
            dispatch(deleteSelected());
            dispatch(toggleSelectMode());
        }
    };

    const handleFilterClick = () => dispatch(toggleShowFilters());

    const handleAddBookClick = () => dispatch(toggleAddMode());

    const handleExpandCollapseClick = () => {
        setMenuIsCollapsed(!menuIsCollapsed);
        if (showFilters) dispatch(toggleShowFilters());
    };

    return (
        <div className="button-bar">
            <button
                className={`btn btn-top ${getCollapseClass()}`}
                title={`${selecting ? 'Cancel Selection' : 'Select Items'}`}
                onClick={handleSelectClick}
            >
                {selecting ? 'Cancel' : 'Select'}
            </button>

            {selecting ?
                (numSelected > 0 &&
                    <button
                        className='btn btn-top'
                        title='Delete Selected Items'
                        onClick={handleDeleteClick}
                    >
                        Delete
                    </button>
                )
                :
                <>
                    <button
                        className={`btn btn-top ${getCollapseClass()}`}
                        title='Filters'
                        onClick={handleFilterClick}
                    >
                        <ImFilter /> Filters
                    </button>

                    <button
                        className={`btn btn-top ${getCollapseClass()}`}
                        title='Add Book'
                        onClick={handleAddBookClick}
                    >
                        Add Book
                    </button>

                    <button
                        className='btn btn-top btn-expand'
                        title={menuIsCollapsed ? 'Expand' : 'Collapse'}
                        onClick={handleExpandCollapseClick}
                    >
                        {menuIsCollapsed ? <MenuDropDown /> : <MenuDropUp />}
                    </button>
                </>
            }
        </div>
    );
};

export default BooksBtns;