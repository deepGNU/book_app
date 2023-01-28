import './BookButtons.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, deleteBook } from '../../features/books-slice';
import { enterEditMode, leaveEditMode } from '../../features/mode-slice';
import { RiDeleteBin5Line as DeleteIcon } from 'react-icons/ri';
import { AiOutlineEdit as EditIcon } from 'react-icons/ai';
import FavoriteIcon from '../icons/FavoriteIcon';

const BookButtons = ({ book }) => {
    const dispatch = useDispatch();
    const editingId = useSelector((s) => s.mode.editingId);

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        dispatch(toggleFavorite(book.id));
        if (book.isFavorite)
            toast.warning(<div>Removed <i>{book.volumeInfo?.title ?? 'Untitled'}</i> from favorites!</div>, { position: toast.POSITION.TOP_CENTER });
        else
            toast.success(<div>Added <i>{book.volumeInfo?.title ?? 'Untitled'}</i> to favorites!</div>, { position: toast.POSITION.TOP_CENTER });
    };

    const handleEditClick = (e) => {
        e.stopPropagation();
        dispatch(enterEditMode(book.id));
    };

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        if (editingId === book.id) dispatch(leaveEditMode());
        Swal.fire({
            title: `Are you sure you want to delete <i>${book.volumeInfo?.title ?? "Untitled"}</i>?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                toast.error(<div>Deleted <i>{book.volumeInfo?.title ?? "Untitled"}</i>!</div>, { position: toast.POSITION.TOP_CENTER });
                dispatch(deleteBook(book.id));
            }
        });
    };

    return (
        <div className="book-btns">
            <button
                className='btn btn-book-item'
                title={`${book.isFavorite ? 'Remove from' : 'Add to'} Favorites`}
                onClick={handleFavoriteClick}
            >
                <FavoriteIcon isFavorite={book.isFavorite} />
            </button>

            <button
                className='btn btn-book-item'
                title='Edit'
                onClick={handleEditClick}
            >
                <EditIcon />
            </button>

            <button
                className='btn btn-book-item'
                title='Delete'
                onClick={handleDeleteClick}
            >
                <DeleteIcon />
            </button>
        </div>
    )
};

export default BookButtons;