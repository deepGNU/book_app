import uuid from 'react-uuid';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { toggleAddMode } from '../../features/mode-slice';
import { addBook } from '../../features/books-slice';
import BookForm from './BookForm';

const BookAddForm = () => {
  const dispatch = useDispatch();

  const emptyBook = {
    "id": uuid()
  };

  const handleSubmit = (book) => {
    dispatch(addBook(book));
    dispatch(toggleAddMode());
    toast.success(<div>Added <i>{book.volumeInfo?.title ?? 'Untitled'}</i>!</div>,
      { position: toast.POSITION.TOP_CENTER });
  };

  const handleClose = () => {
    dispatch(toggleAddMode());
  };

  return (
    <BookForm
      bookData={emptyBook}
      onSubmit={handleSubmit}
      onClose={handleClose}
    />
  )
};

export default BookAddForm;
