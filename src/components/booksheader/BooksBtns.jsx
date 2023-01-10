import { useDispatch, useSelector } from 'react-redux';
import { ImFilter } from 'react-icons/im';
import { GoKebabHorizontal as Kebab } from 'react-icons/go';
import { toggleSelectMode, toggleAddMode, toggleShowFilters } from '../../features/mode-slice';
import { cancelSelection, deleteSelected } from '../../features/books-slice';
import { useState } from 'react';

const BooksBtns = () => {
    const dispatch = useDispatch();
    const selecting = useSelector((s) => s.mode.selecting);
    const numSelected = useSelector((s) => s.book.numSelected);
    const showFilters = useSelector((s) => s.mode.showFilters);
    const [hideBtnsWhenNarrow, setHideBtnsWhenNarrow] = useState(true);
    const getHideNarrowClass = () => (hideBtnsWhenNarrow && !selecting) ? 'hide-when-narrow' : '';

    const handleDeleteClick = () => {
        if (window.confirm(`Are you sure you want to delete ${numSelected > 1 ? numSelected + ' items' : 'item'}?`)) {
            dispatch(deleteSelected());
            dispatch(toggleSelectMode());
        }
    };

    return (
        <div className="button-bar">
            <div>
                <button
                    className={`btn btn-top ${getHideNarrowClass()}`}
                    title={`${selecting ? 'Cancel Selection' : 'Select Items'}`}
                    onClick={() => {
                        if (selecting) dispatch(cancelSelection());
                        if (showFilters) dispatch(toggleShowFilters());
                        dispatch(toggleSelectMode());
                    }}
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
                    </button>)
                    :
                    <>
                        <button
                            className={`btn btn-top ${getHideNarrowClass()}`}
                            title='Filters'
                            onClick={() => dispatch(toggleShowFilters())}
                        >
                            <ImFilter />
                            <span>&nbsp;Filters&nbsp;</span>
                        </button>

                        <button
                            className={`btn btn-top ${getHideNarrowClass()}`}
                            title='Add Book'
                            onClick={() => dispatch(toggleAddMode())}
                        >
                            Add Book
                        </button>

                        <button
                            className='btn btn-top btn-expand'
                            title={hideBtnsWhenNarrow ? 'Show Buttons' : 'Hide Buttons'}
                            onClick={() => {
                                setHideBtnsWhenNarrow(!hideBtnsWhenNarrow);
                                if (showFilters) dispatch(toggleShowFilters());
                            }}
                        >
                            <Kebab />
                        </button>
                    </>
                }
            </div>
        </div>
    );
};

export default BooksBtns;