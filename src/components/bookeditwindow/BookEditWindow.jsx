import React from 'react'
import './BookEditWindow.css'
import { useSelector, useDispatch } from 'react-redux';
import { leaveEditMode } from '../../features/mode-slice';
import { editBook } from '../../features/books-slice';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiFillCloseSquare, AiFillCloseCircle } from 'react-icons/ai';
import { FaWindowClose } from 'react-icons/fa';
import useEsc from '../../hooks/useEsc';

const BookEditWindow = () => {
    const dispatch = useDispatch();
    useEsc(() => dispatch(leaveEditMode()));
    // const editingId = useSelector((s) => s.mode.editingId);
    // const book = useSelector((s) => s.book.books).find((b) => b.id === editingId);
    // console.log(editingId);
    // const [title, setTitle] = useState(book.volumeInfo.title);
    // const [authors, setAuthors] = useState(book.volumeInfo.authors);
    // useEffect(() => {
    //     setTitle(book.volumeInfo.title);
    //     setAuthors(book.volumeInfo.authors);
    // }, [editingId]);

    return (
        <div className='book-edit-window'>
            <button
                className='btn close'
                title='Close'
                onClick={() => dispatch(leaveEditMode())}
            >
                {/* <AiFillCloseSquare /> */}
                {/* <FaWindowClose /> */}
                <AiFillCloseCircle />
            </button>
            <form className='book-edit-form' action="" onSubmit={() => {
                // dispatch(editBook(
                //     {
                //         ...book,
                //         volumeInfo: {
                //             ...book.volumeInfo,
                //             title,
                //             authors,
                //         }
                //     }));
                // dispatch(leaveEditMode());
            }}>
                {/* <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value={authors} onChange={(e) => setAuthors(e.target.value)} /> */}
                <label htmlFor="title">Title</label>
                <input id='title' type="text" defaultValue='Title' />
                <hr />

                <label htmlFor="authors">Authors</label>
                <input id='authors' type="text" defaultValue='Authors' />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default BookEditWindow