import './BookForm.css';
import React, { useState } from 'react';
import useEsc from '../../hooks/useEsc';
import CloseBtn from './CloseBtn';
import { capitalize } from '../../utils/string';
import languageCodes from './language-codes';
import iso6391 from 'iso-639-1';


const BookForm = ({ bookData, onSubmit, onClose }) => {
    const [book, setBook] = useState(bookData);
    const inputFields = ['title', 'authors', 'publisher'];
    useEsc(onClose);

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(book);
    };

    const handleChange = (e) => {
        setBook((prev) => ({
            ...prev,
            volumeInfo: {
                ...prev.volumeInfo,
                title: e.target.id === 'title' ? e.target.value : prev.volumeInfo?.title ?? "",
                authors: e.target.id === 'authors' ? e.target.value : prev.volumeInfo?.authors ?? "",
                language: e.target.id === 'language' ? e.target.value : prev.volumeInfo?.language ?? "",
                publisher: e.target.id === 'publisher' ? e.target.value : prev.volumeInfo?.publisher ?? "",
                averageRating: e.target.id === 'rating' ? e.target.value : prev.volumeInfo?.averageRating ?? "",
                description: e.target.id === 'description' ? e.target.value : prev.volumeInfo?.description ?? "",
                publishedDate: e.target.id === 'publishedDate' ? e.target.value : prev.volumeInfo?.publishedDate ?? "",
                imageLinks: {
                    ...prev.volumeInfo?.imageLinks,
                    thumbnail: e.target.id === 'image' ? e.target.value : prev.volumeInfo?.imageLinks?.thumbnail ?? ""
                }
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
            <CloseBtn onClose={handleClose} />

            {inputFields.map(field =>
                <React.Fragment key={field}>
                    <label htmlFor={field}>{capitalize(field)}</label>
                    <input
                        id={field}
                        type="text"
                        value={book.volumeInfo ? book.volumeInfo[field] : ""}
                        onChange={handleChange}
                        onKeyDown={handleEnter}
                    />
                    < hr />
                </React.Fragment>
            )}

            <label htmlFor="publishedDate">Published Date</label>
            <input
                id='publishedDate'
                type="date"
                value={book.volumeInfo?.publishedDate ?? ""}
                onChange={handleChange}
            />
            <hr />

            <label htmlFor="rating">Rating</label>
            <input
                id='rating'
                type="number"
                min="0"
                max="5"
                value={book.volumeInfo?.averageRating ?? ""}
                onChange={handleChange}
            />
            <hr />

            <label htmlFor="language">Language</label>
            <select
                id='language'
                value={book.volumeInfo?.language ?? ""}
                onChange={handleChange}
            >
                <option value="">Select a language</option>
                {languageCodes.map(code => {
                    const language = iso6391.getName(code);
                    return language &&
                        <option key={code} value={code}>{language}</option>
                }
                )}
            </select>
            <hr />


            <label htmlFor="image">Image URL</label>
            <input
                id='image'
                type="text"
                value={book.volumeInfo?.imageLinks?.thumbnail ?? ""}
                onChange={handleChange}
                onKeyDown={handleEnter}
            />
            <hr />

            <label htmlFor="description">Description</label>
            <textarea
                id='description'
                value={book.volumeInfo?.description ?? ""}
                onChange={handleChange}
            />
            <hr />

            <button>Submit</button>
        </form>
    )
};

export default BookForm;