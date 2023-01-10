import './Book.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSelect } from '../../features/books-slice';
import { useNavigate } from 'react-router-dom';
import BookBtns from './BookBtns';
import SelectingIcon from './SelectingIcon';

const Book = ({ book, isOnSelectingMode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`book-card
        ${isOnSelectingMode && !book.isSelected && ' faded'}
        ${book.isSelected && ' book-selected'}
        ${!isOnSelectingMode && ' not-selecting'}`}
      title={isOnSelectingMode ? 'Select Item' : 'See Details'}
      onClick={() => isOnSelectingMode ? dispatch(toggleSelect(book.id))
        : navigate(`/books/${book.id}`)}
    >

      <div className='top-book-card'>
        <img className='img-book-card' src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt="" />

        <div className='text-book-card'>
          <hr />

          <h5 className='book-title'>{book.volumeInfo.title}</h5>

          <p>
            {book.volumeInfo.authors}
            &nbsp;&#9679;&nbsp;
            {book.volumeInfo.publishedDate}
          </p>

          <hr />
        </div>
      </div>

      {isOnSelectingMode ?
        <SelectingIcon isChecked={book.isSelected} />
        : <BookBtns book={book} />}
    </div>
  )
};

export default Book;