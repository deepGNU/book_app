import React from 'react'
import './BookEditWindow.css'
import { useSelector, useDispatch } from 'react-redux';
import { leaveEditMode } from '../../features/mode-slice';
import { editBook } from '../../features/books-slice';
import { useState } from 'react';
import { useEffect } from 'react';

const BookEditWindow = () => {
    const dispatch = useDispatch();
    const editingId = useSelector((s) => s.mode.editingId);
    const book = useSelector((s) => s.book.books).find((b) => b.id === editingId);
    console.log(editingId);
    const [title, setTitle] = useState(book.volumeInfo.title);
    const [authors, setAuthors] = useState(book.volumeInfo.authors);
    useEffect(() => {
        setTitle(book.volumeInfo.title);
        setAuthors(book.volumeInfo.authors);
    }, [editingId]);

    return (
        <div className='book-edit-window'>
            BookEditWindow
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
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value={authors} onChange={(e) => setAuthors(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default BookEditWindow