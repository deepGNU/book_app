import React from 'react'
import '../bookeditwindow/BookEditWindow.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAddMode } from '../../features/mode-slice';
import { addBook } from '../../features/books-slice';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiFillCloseSquare, AiFillCloseCircle } from 'react-icons/ai';
import { FaWindowClose } from 'react-icons/fa';
import useEsc from '../../hooks/useEsc';

const BookAddWindow = () => {
  const dispatch = useDispatch();
  useEsc(() => dispatch(toggleAddMode()));
  // const editingId = useSelector((s) => s.mode.editingId);
  // const book = useSelector((s) => s.book.books).find((b) => b.id === editingId);
  // console.log(editingId);
  const [title, setTitle] = useState("Title");
  const [authors, setAuthors] = useState("Authors");
  const [cover, setCover] = useState();
  // useEffect(() => {
  //     setTitle(book.volumeInfo.title);
  //     setAuthors(book.volumeInfo.authors);
  // }, [editingId]);

  return (
    <div className='book-edit-window position-fixed-centered'>
      <button
        className='btn close'
        title='Close'
        onClick={() => dispatch(toggleAddMode())}
      >
        {/* <AiFillCloseSquare /> */}
        {/* <FaWindowClose /> */}
        <AiFillCloseCircle />
      </button>
      <form className='book-edit-form' action="" onSubmit={() => {
        dispatch(addBook(
          {
            "id": Math.random().toString(),
            "volumeInfo": {
              title,
              authors,
              "imageLinks": {
                "thumbnail": cover
              }
            }
          }));
        dispatch(toggleAddMode());
      }}>
        {/* <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value={authors} onChange={(e) => setAuthors(e.target.value)} /> */}
        <label htmlFor="title">Title</label>
        {/* <input id='title' type="text"  /> */}

        <input id='title' type="text" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
        <hr />

        <label htmlFor="authors">Authors</label>
        {/* <input id='authors' type="text" /> */}

        <input id='authors' type="text" defaultValue={authors} onChange={(e) => setAuthors(e.target.value)} />

        <label htmlFor="cover">Cover Image URL</label>
        <input id='cover' type="text" onChange={(e) => setCover(e.target.value)} />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default BookAddWindow
