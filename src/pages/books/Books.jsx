import './Books.css';
import { useSelector, useDispatch } from "react-redux";
import BookItem from '../../components/bookitem/BookItem';
import { addBook, changeFilter, changeLang, changeQuery } from '../../features/books-slice';
import { toggleAddMode } from '../../features/mode-slice';
import { ImFilter } from 'react-icons/im';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import langCodes from './lang-codes';
import { useState } from 'react';


const Books = () => {
    const dispatch = useDispatch();
    const booksUnfiltered = useSelector((s) => s.book.books);
    const filter = useSelector((s) => s.book.filter);
    const lang = useSelector((s) => s.book.lang);
    // const query = useSelector((s) => s.book.query);
    const langName = new Intl.DisplayNames(['en'], { type: 'language' });
    const [searchBarVal, setSearchBarVal] = useState('');
    const [datePrior, setDatePrior] = useState();
    const [filterRating, setFilterRating] = useState();
    const [showFilters, setShowFilters] = useState(false);
    let books = booksUnfiltered;

    // if (datePrior) {
    books = booksUnfiltered.filter((b) => {
        // console.log();
        return (!datePrior || Date.parse(b.volumeInfo.publishedDate) < datePrior) &&
            (!filterRating || b.volumeInfo.averageRating >= filterRating);
        // && (!filterEbookAvailable || b.saleInfo.isEbook);
        // && (!filterEbookAvailable || b.accessInfo.epub.isAvailable
        //     || b.accessInfo.pdf.isAvailable);
        // && (!filterPublicDomain || b.accessInfo.publicDomain == true);
    });
    // }

    const { search } = window.location;
    // console.log(search)
    const query = new URLSearchParams(search).get('search_query');
    // console.log(query)
    dispatch(changeQuery(query));


    return (
        <>
            <div className="top">
                <form action="/" method="get" className='search-bar'>
                    <input
                        name='search_query'
                        id='search'
                        type="text"
                        placeholder='Search'
                    // value={searchBarVal}
                    // onChange={(e) => setSearchBarVal(e.target.value)}
                    />
                    <button title='Search'><HiOutlineMagnifyingGlass /></button>
                </form>

                <div className="button-bar">
                    <button onClick={() => { setShowFilters(!showFilters) }} className='btn btn-top' title='Filter Results'>
                        <ImFilter />
                        <span>&nbsp;Filters&nbsp;</span>
                    </button>
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
                        onClick={() => dispatch(toggleAddMode())
                            
                            // dispatch(addBook({
                            // "kind": "books#volume",
                            // "id": Math.random().toString(),
                            // "etag": "vQdfPMQwFMk",
                            // "selfLink": "https://www.googleapis.com/books/v1/volumes/64tuPwAACAAJ",
                            // "volumeInfo": {
                            //     "title": "Flowers for Algernon",
                            //     "authors": [
                            //         "Daniel Keyes"
                            //     ],
                            //     "publisher": "Gollancz",
                            //     "publishedDate": "2000",
                            //     "description": "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone's jokes - until an experiment in the enhancement of human intelligence turns him into a genius. But then Algernon, the mouse whose triumphal experimental tranformation preceded his, fades and dies, and Charlie has to face the possibility that his salvation was only temporary.",
                            //     "industryIdentifiers": [
                            //         {
                            //             "type": "ISBN_10",
                            //             "identifier": "1857989384"
                            //         },
                            //         {
                            //             "type": "ISBN_13",
                            //             "identifier": "9781857989380"
                            //         }
                            //     ],
                            //     "readingModes": {
                            //         "text": false,
                            //         "image": false
                            //     },
                            //     "pageCount": 216,
                            //     "printType": "BOOK",
                            //     "categories": [
                            //         "Fiction"
                            //     ],
                            //     "maturityRating": "NOT_MATURE",
                            //     "allowAnonLogging": false,
                            //     "contentVersion": "preview-1.0.0",
                            //     "panelizationSummary": {
                            //         "containsEpubBubbles": false,
                            //         "containsImageBubbles": false
                            //     },
                            //     "imageLinks": {
                            //         "smallThumbnail": "http://books.google.com/books/content?id=64tuPwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                            //         "thumbnail": "http://books.google.com/books/content?id=64tuPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                            //     },
                            //     "language": "en",
                            //     "previewLink": "http://books.google.com/books?id=64tuPwAACAAJ&dq=flowers+inauthor:keyes&hl=&cd=6&source=gbs_api",
                            //     "infoLink": "http://books.google.com/books?id=64tuPwAACAAJ&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
                            //     "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=64tuPwAACAAJ"
                            // },
                            // "saleInfo": {
                            //     "country": "IL",
                            //     "saleability": "NOT_FOR_SALE",
                            //     "isEbook": false
                            // },
                            // "accessInfo": {
                            //     "country": "IL",
                            //     "viewability": "NO_PAGES",
                            //     "embeddable": false,
                            //     "publicDomain": false,
                            //     "textToSpeechPermission": "ALLOWED",
                            //     "epub": {
                            //         "isAvailable": false
                            //     },
                            //     "pdf": {
                            //         "isAvailable": false
                            //     },
                            //     "webReaderLink": "http://play.google.com/books/reader?id=64tuPwAACAAJ&hl=&printsec=frontcover&source=gbs_api",
                            //     "accessViewStatus": "NONE",
                            //     "quoteSharingAllowed": false
                            // },
                            // "searchInfo": {
                            //     "textSnippet": "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone&#39;s jokes - until an experiment in the enhancement of human intelligence turns him into a genius."
                            // }
                        // }))
                    }
                        >
                        Add Book
                    </button>
                </div>
            </div>
            <div>


                <div className={`filters ${showFilters ? "visible bg-dark-gray" : "invisible"}`}>
                    <h2>Filters</h2>
                    <div>
                        <label htmlFor="published-prior">Published Before:</label>
                        <select name="" id="published-prior" onChange={(e) => setDatePrior(Date.parse(e.target.value))}>
                            <option value="">No Filter</option>
                            {Array.from({ length: 500 }, (_, i) => new Date().getFullYear() - i).map((y) => <option key={y} value={y}>{y}</option>)}
                        </select>
                        {/* <input list='years' onChange={(e) => setDatePrior(Date.parse(e.target.value))} />
                        <datalist id='years'>

                            {Array.from({ length: 500 }, (_, i) => new Date().getFullYear() - i).map((y) => <option key={y} value={y} />)}
                            {/* [...Array(new Date().getFullYear()).keys()] 
                        </datalist> */}
                    </div>

                    <div>
                        <label htmlFor="rating">Minimal Rating:</label>
                        <select name="" id="rating"
                            onChange={(e) => setFilterRating(e.target.value)}
                        >
                            <option value="">No Filter</option>
                            {[...Array(5).keys()].map((x) => <option key={x} value={x + 1}>{x + 1}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            <div className='books-div'>{books.map((b) => <BookItem key={b.id} book={b} />)}</div>
        </>
    );
};

export default Books;
