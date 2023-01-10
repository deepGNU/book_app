import React from 'react'
import '../bookeditwindow/BookEditWindow.css';
import { useDispatch } from 'react-redux';
import { toggleAddMode } from '../../features/mode-slice';
import { addBook } from '../../features/books-slice';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import useEsc from '../../hooks/useEsc';

const BookAddWindow = () => {
  const dispatch = useDispatch();
  useEsc(() => dispatch(toggleAddMode()));
  const [title, setTitle] = useState("Title");
  const [authors, setAuthors] = useState("Authors");
  const [cover, setCover] = useState();

  return (
    <div className='book-edit-window position-fixed-centered'>
      <button
        className='btn close'
        title='Close'
        onClick={() => dispatch(toggleAddMode())}
      >
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
        <label htmlFor="title">Title</label>

        <input id='title' type="text" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
        <hr />

        <label htmlFor="authors">Authors</label>

        <input id='authors' type="text" defaultValue={authors} onChange={(e) => setAuthors(e.target.value)} />

        <label htmlFor="cover">Cover Image URL</label>
        <input id='cover' type="text" onChange={(e) => setCover(e.target.value)} />

        <button>Submit</button>
      </form>
    </div>
  )
};

export default BookAddWindow;
