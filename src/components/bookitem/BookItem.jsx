import './BookItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, deleteBook, toggleSelect } from '../../features/books-slice';
import { enterEditMode } from '../../features/mode-slice';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { ImCheckboxChecked as Checked, ImCheckboxUnchecked as Unchecked } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const editing = useSelector((s) => s.mode.editing);
  const selecting = useSelector((s) => s.mode.selecting);

  return (
    <div
      onClick={() => selecting ? dispatch(toggleSelect(book.id)) :
        navigate(`/books/${book.id}`)}
      className={`book-card ${(selecting && !book.isSelected) ? 'faded' : ''}
      ${book.isSelected && ' book-selected'} ${!selecting ? ' not-selecting' : ''}`}
      title={selecting ? 'Select Item' : 'See Details'}
    >
      {selecting &&
        <div className="selected-icon">
          {book.isSelected ? <Checked /> : <Unchecked />}
        </div>}

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
     {!selecting && <div className="book-btns">
        <button
          className='btn btn-book-item'
          title={book.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleFavorite(book.id));
            if (book.isFavorite)
              toast.warning(`${book.volumeInfo.title} removed from favorites.`,
                { position: toast.POSITION.TOP_CENTER });
            else
              toast.success(book.volumeInfo.title +
                (book.isFavorite ? " removed from favorites." : " added to favorites."),
                { position: toast.POSITION.TOP_CENTER });
          }}>
          {book.isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </button>
        <button
          className='btn btn-book-item'
          title='Edit'
          onClick={(e) => {
            e.stopPropagation();
            dispatch(enterEditMode(book.id));
          }}>
          <AiOutlineEdit />
        </button>
        <button
          className='btn btn-book-item'
          title='Delete'
          onClick={(e) => {
            e.stopPropagation();
            if (window.confirm(`Are you sure you want to delete ${book.volumeInfo.title}?`)) {
              dispatch(deleteBook(book.id))
            }
          }}>
          <RiDeleteBin5Line />
        </button>
      </div>}
    </div>
  )
}

export default BookItem