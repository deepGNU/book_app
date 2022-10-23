import { useDispatch } from 'react-redux';
import { ImFilter } from 'react-icons/im';
import { toggleAddMode, toggleShowFilters } from '../../features/mode-slice';

const BooksBtns = () => {
    const dispatch = useDispatch();

    return (
        <div className="button-bar">
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