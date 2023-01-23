import { useDispatch } from 'react-redux';
import { toggleAddMode } from '../../features/mode-slice';
import { addBook } from '../../features/books-slice';
import uuid from 'react-uuid';
import BookForm from './BookForm';

const BookAddForm = () => {
  const dispatch = useDispatch();

  const emptyBook = {
    "id": uuid()
  };

  const handleSubmit = (book) => {
    dispatch(addBook(book));
    dispatch(toggleAddMode());
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
