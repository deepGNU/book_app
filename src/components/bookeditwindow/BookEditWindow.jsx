import React from 'react'
import './BookEditWindow.css'
import { useSelector, useDispatch } from 'react-redux';
import { leaveEditMode } from '../../features/mode-slice';
import { editBook } from '../../features/books-slice';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import useEsc from '../../hooks/useEsc';

const BookEditWindow = () => {
    const dispatch = useDispatch();
    useEsc(() => dispatch(leaveEditMode()));
    const editingId = useSelector((s) => s.mode.editingId);
    const book = useSelector((s) => [...s.book.books, ...s.favorite.favBooks]).find((b) => b.id === editingId);
    console.log(editingId);
    const [title, setTitle] = useState(book.volumeInfo.title);
    const [authors, setAuthors] = useState(book.volumeInfo.authors);
    useEffect(() => {
        setTitle(book.volumeInfo.title);
        setAuthors(book.volumeInfo.authors);
    }, [editingId, book.volumeInfo.authors, book.volumeInfo.title]); // What's the deal with this? Check later.

    return (
        <div className='book-edit-window position-fixed-centered'>
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
                dispatch(editBook(
                    {
                        ...book,
                        volumeInfo: {
                            ...book.volumeInfo,
                            title,
                            authors,
                        }
                    }));
                dispatch(leaveEditMode());
            }}>
                {/* <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value={authors} onChange={(e) => setAuthors(e.target.value)} /> */}
                <label htmlFor="title">Title</label>
                <input id='title' type="text" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
                <hr />

                <label htmlFor="authors">Authors</label>
                <input id='authors' type="text" defaultValue={authors} onChange={(e) => setAuthors(e.target.value)} />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default BookEditWindow