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
    const [hideBtnsWhenNarrow, setHideBtnsWhenNarrow] = useState(true);

    return (
        <div className="button-bar">
            <button
                className='btn btn-top btn-expand'
                title={hideBtnsWhenNarrow ? 'Show Buttons' : 'Hide Buttons'}
                onClick={() => setHideBtnsWhenNarrow(!hideBtnsWhenNarrow)}
            >
                <Kebab />
            </button>


            <div className={hideBtnsWhenNarrow ? 'hide-when-narrow' : ''}>
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
                        Delete Selected
                    </button>}

                <button
                    className='btn btn-top'
                    title='Select Items'
                    onClick={() => {
                        if (selecting) dispatch(cancelSelection());
                        dispatch(toggleSelectMode());
                    }}
                >
                    {selecting ? 'Cancel Selection' : 'Select'}
                </button>

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
            </div>
        </div>
    );
};

export default BooksBtns;