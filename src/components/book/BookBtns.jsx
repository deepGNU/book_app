import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { toggleFavorite, deleteBook } from '../../features/books-slice';
import { addFavorite, removeFavorite } from '../../features/favorites-slice';
import { enterEditMode } from '../../features/mode-slice';
import { RiDeleteBin5Line as DeleteIcon } from 'react-icons/ri';
import { AiOutlineEdit as EditIcon } from 'react-icons/ai';
import FavoriteIcon from './FavoriteIcon';

const BookBtns = ({ book }) => {
    const dispatch = useDispatch();

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        dispatch(toggleFavorite(book.id));
        if (book.isFavorite) {
            dispatch(removeFavorite(book.id));
            toast.warning(`${book.volumeInfo.title} removed from favorites.`,
                { position: toast.POSITION.TOP_CENTER });
        }
        else {
            dispatch(addFavorite(book));
            toast.success(`${book.volumeInfo.title} added to favorites.`,
                { position: toast.POSITION.TOP_CENTER });
        }
    };

    const handleEditClick = (e) => {
        e.stopPropagation();
        dispatch(enterEditMode(book.id));
    };

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        if (window.confirm(`Are you sure you want to delete ${book.volumeInfo.title}?`)) {
            dispatch(deleteBook(book.id));
            dispatch(removeFavorite(book.id));
        }
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