import { useDispatch } from 'react-redux';
import { toggleAddMode } from '../../features/mode-slice';
import { addBook } from '../../features/books-slice';
import uuid from 'react-uuid';
import BookForm from './BookForm';
import { toast } from 'react-toastify';

const BookAddForm = () => {
  const dispatch = useDispatch();

  const emptyBook = {
    "id": uuid()
  };

  const handleSubmit = (book) => {
    dispatch(addBook(book));
    dispatch(toggleAddMode());
    toast.success(<div><i>{book.volumeInfo?.title ?? 'Untitled'}</i> added.</div>, { position: toast.POSITION.TOP_CENTER });
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
