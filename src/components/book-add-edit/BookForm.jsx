import './BookForm.css';
import React, { useState } from 'react';
import useEsc from '../../hooks/useEsc';
import CloseBtn from './CloseBtn';
import { capitalize } from '../../utils/string';

const BookForm = ({ bookData, onSubmit, onClose }) => {
    const [book, setBook] = useState(bookData);
    const inputFields = ['title', 'authors', 'publisher'];
    useEsc(onClose);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(book);
    };

    const handleChange = (e) => {
        setBook((prev) => ({
            ...prev,
            volumeInfo: {
                ...prev.volumeInfo,
                title: e.target.id === 'title' ? e.target.value : prev.volumeInfo.title,
                authors: e.target.id === 'authors' ? e.target.value : prev.volumeInfo.authors,
                publisher: e.target.id === 'publisher' ? e.target.value : prev.volumeInfo.publisher,
                description: e.target.id === 'description' ? e.target.value : prev.volumeInfo.description,
            }
        }));
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            e.target.blur();
        }
    };

    return (
        <form className='book-form position-fixed-centered' onSubmit={handleSubmit}>
            <CloseBtn onClose={onClose} />

            {inputFields.map(field =>
                <React.Fragment key={field}>
                    <label htmlFor={field}>{capitalize(field)}</label>
                    <input
                        id={field}
                        type="text"
                        value={book.volumeInfo[field]}
                        onChange={handleChange}
                        onKeyDown={handleEnter}
                    />
                    < hr />
                </React.Fragment>
            )}

            <label htmlFor="description">Description</label>
            <textarea
                id='description'
                value={book.volumeInfo.description}
                onChange={handleChange}
            />
            <hr />

            <button>Submit</button>
        </form>
    )
};

export default BookForm;