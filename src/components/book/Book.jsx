import '../book-buttons/BookButtons.css';
import './Book.css';
import { useNavigate, useLocation } from 'react-router-dom';
import BookButtons from '../book-buttons/BookButtons';
import SelectingIcon from '../icons/SelectingIcon';

const Book = ({ book, selecting, toggleSelected }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname === '/' ? '/books' : location.pathname;

  const bookClasses = `book-card${(selecting && !book.isSelected ? ' faded' : '') +
    (book.isSelected ? ' book-selected' : '') +
    (!selecting ? ' not-selecting' : '')}`;

  const handleClick = () => selecting ? toggleSelected(book.id)
    : navigate(`${path}/${book.id}`);

  return (
    <div
      className={bookClasses}
      title={selecting ? 'Select Item' : 'See Details'}
      onClick={handleClick}
    >
      <div className='top-book-card'>
        <img className='img-book-card' src={book.volumeInfo?.imageLinks?.thumbnail} alt='Cover' />
        <hr />
        <div className='text-book-card'>
          <h5 className='book-title'>{book.volumeInfo?.title}</h5>
          <h6 className='book-title'>{book.volumeInfo?.subtitle}</h6>
          <p>
            {book.volumeInfo?.authors}
            &nbsp;&#9679;&nbsp;
            {book.volumeInfo?.publishedDate}
          </p>
        </div>
        <hr />
      </div>

      {selecting ?
        <SelectingIcon isChecked={book.isSelected} />
        : <BookButtons book={book} />}
    </div>
  )
};

export default Book;