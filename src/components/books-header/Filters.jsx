import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterBooks } from '../../features/books-slice';
import { setFilterDateAfter, setFilterDateBefore, setFilterMinRating } from '../../features/mode-slice';

const Filters = () => {
    const dispatch = useDispatch();
    const books = useSelector((s) => s.book.books);
    const showFilters = useSelector((s) => s.mode.showFilters);
    const datePrior = useSelector((s) => s.mode.filterDateBefore);
    const dateAfter = useSelector((s) => s.mode.filterDateAfter);
    const filterRating = useSelector((s) => s.mode.filterMinRating);
    // const [datePrior, setDatePrior] = useState(prev => prev);
    // const [dateAfter, setDateAfter] = useState(prev => prev);
    // const [filterRating, setFilterRating] = useState(prev => prev);
    // console.log(dateAfter, datePrior, filterRating)

    useEffect(() => {
        const booksFiltered = books.filter((b) => {
            return (!dateAfter || Date.parse(b.volumeInfo?.publishedDate) > dateAfter) &&
                (!datePrior || Date.parse(b.volumeInfo?.publishedDate) < datePrior) &&
                (!filterRating || b.volumeInfo?.averageRating >= filterRating);
        });

        dispatch(filterBooks(booksFiltered));
    }, [dispatch, books, dateAfter, datePrior, filterRating]);

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
            <div className='filter-div'>
                <label htmlFor="rating">Minimal Rating:&nbsp;</label>
                <select
                    name="" id="rating" value={filterRating || ''}
                    onChange={handleRatingChange}
                >
                    <option value="">No Filter</option>
                    {[...Array(5).keys()].map((x) => <option key={x} value={x + 1}>{x + 1}</option>)}
                </select>
            </div>

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
        </div>
    );
};

export default Filters;