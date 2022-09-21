import './BookItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, editBook, deleteBook } from '../../features/books-slice';
import { enterEditMode } from '../../features/mode-slice';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookItem = ({ book }) => {
  // console.log(book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editing = useSelector((s) => s.mode.editing);

  return (
    <div onClick={() => navigate(`/books/${book.id}`)} className='book-card' title='See Details'>
      <div className='top-book-card'>
        <img className='img-book-card' src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} alt="" />
        <div className='text-book-card'>
          <hr />
          <h5>{book.volumeInfo.title}</h5>
          <p>
            {book.volumeInfo.authors}
            &nbsp;&#9679;&nbsp;
            {book.volumeInfo.publishedDate}
          </p>
          <hr />
        </div>
      </div>
      <div className="book-btns">
        {/* <ToastContainer /> */}
        <button
          className='btn btn-book-item'
          title={book.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleFavorite(book.id));
            toast(book.volumeInfo.title + (book.isFavorite ? " removed from favorites." : " added to favorites."));
          }}>
          {book.isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </button>
        <button
          className='btn btn-book-item'
          title='Edit'
          onClick={(e) => {
            e.stopPropagation();
            // if (!editing) {
            dispatch(enterEditMode(book.id));
            // dispatch(editBook(
            //   {
            //     ...book,
            //     volumeInfo: {
            //       ...book.volumeInfo,
            //       title: book.volumeInfo.title + " EDITED"
            //     }
            //   }));
            // }
          }}>
          <AiOutlineEdit />
        </button>
        <button
          className='btn btn-book-item'
          title='Delete'
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteBook(book.id))
          }}>
          <RiDeleteBin5Line />
        </button>
        {/* <button className='btn btn-book-item' onClick={() => navigate(`/books/${book.id}`)}>See Details</button> */}
      </div>
    </div>
  )
}

export default BookItem