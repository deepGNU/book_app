import { useSelector, useDispatch } from 'react-redux';
import { setFilterDateAfter, setFilterDateBefore, setFilterMinRating } from '../../features/mode-slice';

const Filters = () => {
    const dispatch = useDispatch();
    const {
        showFilters,
        filterDateBefore: datePrior,
        filterDateAfter: dateAfter,
        filterMinRating: filterRating
    } = useSelector((s) => s.mode);

    const handleRatingChange = (e) => {
        dispatch(setFilterMinRating(e.target.value));
    };

    const handleDateAfterChange = (e) => {
        dispatch(setFilterDateAfter(Date.parse(e.target.value)));
    };

    const handleDatePriorChange = (e) => {
        dispatch(setFilterDateBefore(Date.parse(e.target.value)));
    };

    return (
        <div className={`${showFilters ? 'filters' : 'hide'}`}>
            {/* Rating filter */}
            <div className='filter-div'>
                <label htmlFor="rating">Minimum Rating:&nbsp;</label>
                <select
                    name="" id="rating" value={filterRating || ''}
                    onChange={handleRatingChange}
                >
                    <option value="">No Filter</option>
                    {[...Array(5).keys()].map((x) => <option key={x} value={x + 1}>{x + 1}</option>)}
                </select>
            </div>
            {/* End of rating filter */}

            {/* Date after filter */}
            <div className='filter-div'>
                <label htmlFor="published-after">Published After:&nbsp;</label>
                <select
                    name="" id="published-after"
                    value={dateAfter ? new Date(dateAfter).getFullYear().toString() : ''}
                    onChange={handleDateAfterChange}
                >
                    <option value="">No Filter</option>
                    {Array.from({ length: 500 }, (_, i) => new Date().getFullYear() - i).map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
            </div>
            {/* End of date after filter */}

            {/* Date before filter */}
            <div className='filter-div'>
                <label htmlFor="published-prior">Published Before:&nbsp;</label>
                <select
                    name="" id="published-prior"
                    value={datePrior ? new Date(datePrior).getFullYear().toString() : ''}
                    onChange={handleDatePriorChange}
                >
                    <option value="">No Filter</option>
                    {Array.from({ length: 500 }, (_, i) => new Date().getFullYear() - i).map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
            </div>
            {/* End of date before filter */}
        </div>
    );
};

export default Filters;