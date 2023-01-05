import { useDispatch, useSelector } from 'react-redux';
import { ImFilter } from 'react-icons/im';
// import { RiDeleteBin5Fill as Delete } from 'react-icons/ri';+
import { GoKebabHorizontal as Kebab } from 'react-icons/go';
import { toggleSelectMode, toggleAddMode, toggleShowFilters } from '../../features/mode-slice';
import { cancelSelection, deleteSelected } from '../../features/books-slice';
import { useState } from 'react';

const BooksBtns = () => {
    const dispatch = useDispatch();
    const selecting = useSelector((s) => s.mode.selecting);
    const showFilters = useSelector((s) => s.mode.showFilters);
    const [hideBtnsWhenNarrow, setHideBtnsWhenNarrow] = useState(true);

    return (
        <div className="button-bar">
            {!selecting &&
                <button
                    className='btn btn-top btn-expand'
                    title={hideBtnsWhenNarrow ? 'Show Buttons' : 'Hide Buttons'}
                    onClick={() => setHideBtnsWhenNarrow(!hideBtnsWhenNarrow)}
                >
                    <Kebab />
                </button>}


            <div className={(hideBtnsWhenNarrow && !selecting) ? 'hide-when-narrow' : ''}>
                {selecting &&
                    <button
                        className='btn btn-top'
                        title='Delete Selected Items'
                        onClick={() => {
                            if (window.confirm(`Are you sure you want to delete selected item?`)) {
                                dispatch(deleteSelected());
                                dispatch(toggleSelectMode());
                            }
                        }}
                    >
                        Delete
                    </button>}

                <button
                    className='btn btn-top'
                    title={`${selecting ? 'Cancel Selection' : 'Select Items'}`}
                    onClick={() => {
                        if (selecting) dispatch(cancelSelection());
                        if (showFilters) dispatch(toggleShowFilters());
                        dispatch(toggleSelectMode());
                    }}
                >
                    {selecting ? 'Cancel' : 'Select'}
                </button>

                {!selecting &&
                    <>
                        <button
                            className='btn btn-top'
                            title='Filters'
                            onClick={() => dispatch(toggleShowFilters())}
                        >
                            <ImFilter />
                            <span>&nbsp;Filters&nbsp;</span>
                        </button>

                        <button
                            className='btn btn-top'
                            title='Add Book'
                            onClick={() => dispatch(toggleAddMode())}
                        >
                            Add Book
                        </button>
                    </>}
            </div>
        </div>
    );
};

export default BooksBtns;