import React from 'react';
import '../books-header/BooksHeader.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAddMode } from '../../features/mode-slice';

const AddBookBtn = ({ selecting = false, isMenuCollapsed = false }) => {
    const dispatch = useDispatch();
    const adding = useSelector((s) => s.mode.adding);
    const handleClick = () => dispatch(toggleAddMode());

    return (
        <button
            className={`btn btn-top${(isMenuCollapsed ? ' hide-if-narrow' : '') +
                (selecting ? ' hide' : '') + (adding ? ' btn-active' : '')}`}
            title={adding ? 'Close Form' : 'Add Book'}
            onClick={handleClick}
        >
            Add Book
        </button>
    )
};

export default AddBookBtn;