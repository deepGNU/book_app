import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBooks } from '../../features/books-slice';

const Filters = () => {
    const dispatch = useDispatch();
    const booksUnfiltered = useSelector((s) => s.book.books);
    const [datePrior, setDatePrior] = useState();
    const [dateAfter, setDateAfter] = useState();
    const [filterRating, setFilterRating] = useState();

    useEffect(() => {
        const booksFiltered = booksUnfiltered.filter((b) => {
            return (!dateAfter || Date.parse(b.volumeInfo.publishedDate) > dateAfter) &&
                (!datePrior || Date.parse(b.volumeInfo.publishedDate) < datePrior) &&
                (!filterRating || b.volumeInfo.averageRating >= filterRating);
        });

        dispatch(updateBooks(booksFiltered));
    }, [dateAfter, datePrior, filterRating]);

    return (
        <div className='filters'>
            <div>
                <label htmlFor="published-after">Published After:&nbsp;</label>
                <label htmlFor="published-prior">Published Before:&nbsp;</label>
                <label htmlFor="rating">Minimal Rating:&nbsp;</label>
            </div>

            <div>
                <select name="" id="published-after"
                    value={new Date(dateAfter).getFullYear().toString()}
                    onChange={(e) => setDateAfter(Date.parse(e.target.value))}
                >
                    <option value="">No Filter</option>
                    {Array.from({ length: 500 }, (_, i) => new Date().getFullYear() - i).map((y) => <option key={y} value={y}>{y}</option>)}
                </select>

                <select name="" id="published-prior"
                    value={new Date(datePrior).getFullYear().toString()}
                    onChange={(e) => setDatePrior(Date.parse(e.target.value))}
                >
                    <option value="">No Filter</option>
                    {Array.from({ length: 500 }, (_, i) => new Date().getFullYear() - i).map((y) => <option key={y} value={y}>{y}</option>)}
                </select>

                <select name="" id="rating" value={filterRating}
                    onChange={(e) => setFilterRating(e.target.value)}
                >
                    <option value="">No Filter</option>
                    {[...Array(5).keys()].map((x) => <option key={x} value={x + 1}>{x + 1}</option>)}
                </select>
            </div>
        </div>
    );
};

export default Filters;