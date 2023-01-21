import { useSelector, useDispatch } from 'react-redux';
import { leaveEditMode } from '../../features/mode-slice';
import { editBook } from '../../features/books-slice';
import { editFavorite } from '../../features/favorites-slice';
import BookForm from './BookForm';

const BookEditForm = () => {
    const dispatch = useDispatch();
    const editingId = useSelector((s) => s.mode.editingId);
    const book = useSelector((s) => [...s.book.books, ...s.favorite.favBooks])
        .find((b) => b.id === editingId);
    if (!book) dispatch(leaveEditMode());

    const handleSubmit = (book) => {
        dispatch(editBook(book));
        dispatch(editFavorite(book));
        dispatch(leaveEditMode());
    };

    const handleClose = () => {
        dispatch(leaveEditMode());
    };

    return (
        <BookForm
            bookData={book}
            onSubmit={handleSubmit}
            onClose={handleClose}
        />
    )
};

export default BookEditForm;