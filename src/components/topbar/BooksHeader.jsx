import './BooksHeader.css';
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, changeLang, changeQuery } from '../../features/books-slice';
import { toggleAddMode } from '../../features/mode-slice';
import { updateBooks } from '../../features/books-slice';
import langCodes from './lang-codes';
import { ImFilter } from 'react-icons/im';
import { SlMagnifier } from 'react-icons/sl';
import { useState } from 'react';
import { useEffect } from 'react';

const BooksHeader = () => {
    const dispatch = useDispatch();
    const booksUnfiltered = useSelector((s) => s.book.books);
    const filter = useSelector((s) => s.book.filter);
    const lang = useSelector((s) => s.book.lang);
    const langName = new Intl.DisplayNames(['en'], { type: 'language' });
    const [datePrior, setDatePrior] = useState();
    const [dateAfter, setDateAfter] = useState();
    const [filterRating, setFilterRating] = useState();
    const [showFilters, setShowFilters] = useState(false);
    let booksFiltered = booksUnfiltered;


    const { search } = window.location;
    const query = new URLSearchParams(search).get('search_query');
    useEffect(() => {
        dispatch(changeQuery(query));
    }, [query]);
    useEffect(() => {
        booksFiltered = booksUnfiltered.filter((b) => {
            return (!dateAfter || Date.parse(b.volumeInfo.publishedDate) > dateAfter) &&
                (!datePrior || Date.parse(b.volumeInfo.publishedDate) < datePrior) &&
                (!filterRating || b.volumeInfo.averageRating >= filterRating);
        });

        dispatch(updateBooks(booksFiltered));
    }, [dateAfter, datePrior, filterRating]);

    return (
        <div className="top">
            <button
                onClick={() => { setShowFilters(!showFilters) }}
                className='btn btn-top'
                title='Filters'
            >
                <ImFilter />
                <span>&nbsp;Filters&nbsp;</span>
            </button>

            {showFilters && <div className={`filters ${showFilters ? "visible bg-dark-gray" : ""}`}>
                <div>
                    <label htmlFor="published-after">Year From&nbsp;</label>
                    <label htmlFor="published-prior">Year To:&nbsp;</label>
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
            </div>}

            <div className="search-bar-wrapper">
                <form action="/" method="get" className='search-bar'>
                    <input
                        name='search_query'
                        id='search'
                        type="text"
                        placeholder='Search'
                    />
                    <button title='Search'>
                        <SlMagnifier />
                    </button>
                </form>
            </div>

            <div className="button-bar">


                {/* <select
                className="drop-down-list"
                onChange={(e) => dispatch(changeFilter(e.target.value))}
                value={filter}
                >
                <option value="">None</option>
                <option value="partial" title='Returns results where at least parts of the text are previewable.'>Partial</option>
                <option value="full" title='Only returns results where all of the text is viewable.'>Full</option>
                <option value="free-ebooks" title='Only returns results that are free Google eBooks.'>Free eBooks</option>
                <option value="paid-ebooks" title='Only returns results that are Google eBooks with a price.'>Paid eBooks</option>
                <option value="ebooks" title='Only returns results that are Google eBooks, paid or free. Examples of non-eBooks would be publisher content that is available in limited preview and not for sale, or magazines.'>eBooks</option>
                </select>
                
                <select
                onChange={(e) => dispatch(changeLang(e.target.value))}
                value={lang}
                >
                {langCodes.map((langCode) => <option key={langCode} value={langCode}>{langName.of(langCode)}</option>)}
            </select> */}
                {/* <input id='published-prior' type="number" min="1960" max="2022" step="1" onChange={(e) => {
                console.log("entered change function");
                setDatePrior(Date.parse(e.target.value));
            }} /> */}

                <button className='btn btn-top'
                    title='Add Book'
                    onClick={() => dispatch(toggleAddMode())}
                >
                    Add Book
                </button>
            </div>
        </div>
    )
}

export default BooksHeader;