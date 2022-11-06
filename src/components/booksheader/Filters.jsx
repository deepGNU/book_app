import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterBooks } from '../../features/books-slice';
import { toggleShowFilters } from '../../features/mode-slice';
import useOutsideAlerter from '../../hooks/useOutsideClick';
import { AiFillCloseCircle } from 'react-icons/ai';

const Filters = () => {
    const dispatch = useDispatch();
    const books = useSelector((s) => s.book.books);
    const showFilters = useSelector((s) => s.mode.showFilters);
    const [datePrior, setDatePrior] = useState();
    const [dateAfter, setDateAfter] = useState();
    const [filterRating, setFilterRating] = useState();

    const ref = useRef();
    // useOutsideAlerter(ref, () => dispatch(toggleShowFilters()));

    useEffect(() => {
        const booksFiltered = books.filter((b) => {
            return (!dateAfter || Date.parse(b.volumeInfo.publishedDate) > dateAfter) &&
                (!datePrior || Date.parse(b.volumeInfo.publishedDate) < datePrior) &&
                (!filterRating || b.volumeInfo.averageRating >= filterRating);
        });

        dispatch(filterBooks(booksFiltered));
    }, [books, dateAfter, datePrior, filterRating]);

    return (
        <div ref={ref} className={`${showFilters ? 'filters' : 'hide'}`}>
            <div>
                <label htmlFor="published-after">Published After:&nbsp;</label>

                <select name="" id="published-after"
                    value={new Date(dateAfter).getFullYear().toString()}
                    onChange={(e) => setDateAfter(Date.parse(e.target.value))}
                >
                    <option value="">No Filter</option>
                    {Array.from({ length: 500 }, (_, i) => new Date().getFullYear() - i).map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
            </div>

            <div>
                <label htmlFor="published-prior">Published Before:&nbsp;</label>

                <select name="" id="published-prior"
                    value={new Date(datePrior).getFullYear().toString()}
                    onChange={(e) => setDatePrior(Date.parse(e.target.value))}
                >
                    <option value="">No Filter</option>
                    {Array.from({ length: 500 }, (_, i) => new Date().getFullYear() - i).map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="rating">Minimal Rating:&nbsp;</label>

                <select name="" id="rating" value={filterRating}
                    onChange={(e) => setFilterRating(e.target.value)}
                >
                    <option value="">No Filter</option>
                    {[...Array(5).keys()].map((x) => <option key={x} value={x + 1}>{x + 1}</option>)}
                </select>
            </div>

            {/* <button
                className='btn btn-close-filters'
                onClick={() => dispatch(toggleShowFilters())}
                title='Hide Filters'
            >
                <AiFillCloseCircle />
            </button> */}
        </div>
    );
};

export default Filters;