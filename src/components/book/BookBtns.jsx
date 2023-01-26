import React from 'react'
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { toggleFavorite, deleteBook } from '../../features/books-slice';
import { enterEditMode } from '../../features/mode-slice';
import { RiDeleteBin5Line as DeleteIcon } from 'react-icons/ri';
import { AiOutlineEdit as EditIcon } from 'react-icons/ai';
import FavoriteIcon from './FavoriteIcon';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BookBtns = ({ book }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        dispatch(toggleFavorite(book.id));
        if (book.isFavorite)
            toast.warning(<div><i>{book.volumeInfo?.title ?? 'Untitled'}</i> removed from favorites.</div>, { position: toast.POSITION.TOP_CENTER });
        else
            toast.success(<div><i>{book.volumeInfo?.title ?? 'Untitled'}</i> added to favorites.</div>, { position: toast.POSITION.TOP_CENTER });
    };

    const handleEditClick = (e) => {
        e.stopPropagation();
        dispatch(enterEditMode(book.id));
    };

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        Swal.fire({
            title: `Are you sure you want to delete <i>${book.volumeInfo?.title ?? "Untitled"}</i>?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                if (location.pathname.includes(book.id)) navigate(-1); // go back if on book details page
                toast.error(<div><i>{book.volumeInfo?.title ?? "Untitled"}</i> deleted.</div>, { position: toast.POSITION.TOP_CENTER });
                dispatch(deleteBook(book.id));
            }
        });
    };

    return (
        <div className="book-btns">
            <button
                className='btn btn-book-item'
                title={`${book.isFavorite ? 'Remove from' : 'Add to'} Favorites`}
                onClick={handleFavoriteClick}>
                <FavoriteIcon isFavorite={book.isFavorite} />
            </button>

            <button
                className='btn btn-book-item'
                title='Edit'
                onClick={handleEditClick}>
                <EditIcon />
            </button>

            <button
                className='btn btn-book-item'
                title='Delete'
                onClick={handleDeleteClick}>
                <DeleteIcon />
            </button>
        </div>
    )
};

export default BookBtns;