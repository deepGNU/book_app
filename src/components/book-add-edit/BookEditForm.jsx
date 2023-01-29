import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { leaveEditMode } from '../../features/mode-slice';
import { editBook } from '../../features/books-slice';
import BookForm from './BookForm';

const BookEditForm = () => {
    const dispatch = useDispatch();
    const editingId = useSelector((s) => s.mode.editingId);
    const book = useSelector((s) => [...s.book.books, ...s.book.favoriteBooks])
        .find((b) => b.id === editingId);

    if (!book) dispatch(leaveEditMode());

    const handleSubmit = (book) => {
        dispatch(editBook(book));
        dispatch(leaveEditMode());
        toast.info(<div>Edited <i>{book.volumeInfo?.title ?? 'Untitled'}</i>!</div>,
            { position: toast.POSITION.BOTTOM_LEFT });
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