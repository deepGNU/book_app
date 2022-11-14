import { useDispatch, useSelector } from 'react-redux';
import { ImFilter } from 'react-icons/im';
import { RiDeleteBin5Fill as Delete } from 'react-icons/ri';
import { toggleSelectMode, toggleAddMode, toggleShowFilters } from '../../features/mode-slice';
import { cancelSelection, deleteSelected } from '../../features/books-slice';

const BooksBtns = () => {
    const dispatch = useDispatch();
    const selecting = useSelector((s) => s.mode.selecting);

    return (
        <div className="button-bar">
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
    );
};

export default BooksBtns;