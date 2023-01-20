import { useDispatch, useSelector } from 'react-redux';
import { ImFilter } from 'react-icons/im';
import { ImMenu3 as MenuDropDown, ImMenu4 as MenuDropUp } from 'react-icons/im';
import { toggleSelectMode, toggleAddMode, toggleShowFilters } from '../../features/mode-slice';
import { cancelSelection, deleteSelected } from '../../features/books-slice';
import { removeFavorite } from '../../features/favorites-slice';
import { useState } from 'react';

const BooksBtns = () => {
    const dispatch = useDispatch();
    const selecting = useSelector((s) => s.mode.selecting);
    const adding = useSelector((s) => s.mode.adding);
    const numSelected = useSelector((s) => s.book.numSelected);
    const showFilters = useSelector((s) => s.mode.showFilters);
    const books = useSelector((s) => s.book.books);
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(!showFilters);

    const handleSelectClick = () => {
        if (selecting) dispatch(cancelSelection());
        if (showFilters) dispatch(toggleShowFilters());
        dispatch(toggleSelectMode());
    };

    const handleDeleteClick = () => {
        if (window.confirm(`Delete ${numSelected > 1 ? numSelected + ' items' : 'item'}?`)) {
            for (const b of books.filter((b) => b.isSelected))
                dispatch(removeFavorite(b.id));
            dispatch(deleteSelected());
            dispatch(toggleSelectMode());
        }
    };

    const handleFilterClick = () => {
        if (!showFilters) setIsMenuCollapsed(false);
        dispatch(toggleShowFilters());
    }

    const handleAddBookClick = () => dispatch(toggleAddMode());

    const handleExpandCollapseClick = () => {
        setIsMenuCollapsed(!isMenuCollapsed);
        if (showFilters) dispatch(toggleShowFilters());
    };

    let filterBtnClasses =
        `btn btn-top${(isMenuCollapsed ? ' hide-if-narrow' : '') +
        (selecting ? ' hide' : '') + (showFilters ? ' btn-active' : '')}`;

    let addBtnClasses =
        `btn btn-top${(isMenuCollapsed ? ' hide-if-narrow' : '') +
        (selecting ? ' hide' : '') + (adding ? ' btn-active' : '')}`;

    let selectBtnClasses =
        `btn btn-top${(isMenuCollapsed && !selecting) ?
            ' hide-if-narrow' : '' + (selecting ? ' btn-active' : '')}`;

    let deleteBtnClasses =
        `btn btn-top${!selecting ? ' hide' : ''}`;

    let expandBtnClasses =
        `btn btn-top btn-expand${selecting ? ' hide' : ''}`;

    return (
        <div className="button-bar">
            <button
                className={filterBtnClasses}
                title={`${showFilters ? 'Hide ' : ''}Filters`}
                onClick={handleFilterClick}
            >
                <ImFilter /> Filters
            </button>

            <button
                className={addBtnClasses}
                title={adding ? 'Close Form' : 'Add Book'}
                onClick={handleAddBookClick}
            >
                Add Book
            </button>

            <button
                className={selectBtnClasses}
                title={`${selecting ? 'Cancel Selection' : 'Select Items'}`}
                onClick={handleSelectClick}
            >
                {selecting ? 'Cancel' : 'Select'}
            </button>

            <button
                className={deleteBtnClasses}
                title='Delete Selected Items'
                onClick={handleDeleteClick}
                disabled={numSelected === 0}
            >
                Delete
            </button>

            <button
                className={expandBtnClasses}
                title={isMenuCollapsed ? 'Expand' : 'Collapse'}
                onClick={handleExpandCollapseClick}
            >
                {isMenuCollapsed ? <MenuDropDown /> : <MenuDropUp />}
            </button>
        </div>
    );
};

export default BooksBtns;