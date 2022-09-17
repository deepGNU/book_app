import './Books.css';
import { useSelector, useDispatch } from "react-redux";
import BookItem from '../../components/bookitem/BookItem';
import { addBook } from '../../features/books-slice';

const Books = () => {
    const dispatch = useDispatch();
    const books = useSelector((s) => s.book.books);

    return (
        <>
            <button onClick={() => dispatch(addBook({
                "kind": "books#volume",
                "id": Math.random().toString(),
                "etag": "vQdfPMQwFMk",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/64tuPwAACAAJ",
                "volumeInfo": {
                    "title": "Flowers for Algernon",
                    "authors": [
                        "Daniel Keyes"
                    ],
                    "publisher": "Gollancz",
                    "publishedDate": "2000",
                    "description": "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone's jokes - until an experiment in the enhancement of human intelligence turns him into a genius. But then Algernon, the mouse whose triumphal experimental tranformation preceded his, fades and dies, and Charlie has to face the possibility that his salvation was only temporary.",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_10",
                            "identifier": "1857989384"
                        },
                        {
                            "type": "ISBN_13",
                            "identifier": "9781857989380"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": false
                    },
                    "pageCount": 216,
                    "printType": "BOOK",
                    "categories": [
                        "Fiction"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "preview-1.0.0",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=64tuPwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=64tuPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=64tuPwAACAAJ&dq=flowers+inauthor:keyes&hl=&cd=6&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=64tuPwAACAAJ&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=64tuPwAACAAJ"
                },
                "saleInfo": {
                    "country": "IL",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "IL",
                    "viewability": "NO_PAGES",
                    "embeddable": false,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=64tuPwAACAAJ&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "NONE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone&#39;s jokes - until an experiment in the enhancement of human intelligence turns him into a genius."
                }
            }))}>Add Book</button>
            <div className='books-div'>{books.map((b) => <BookItem key={b.id} book={b} />)}</div>
        </>
    );
};

export default Books;
