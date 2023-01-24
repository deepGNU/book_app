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
            handleSubmit(e);
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

            <div className='d-flex justify-content-between'>
                <div className='d-flex flex-column'>
                    <label htmlFor="publishedDate">Published Date</label>
                    <input
                        id='publishedDate'
                        type="date"
                        value={book.volumeInfo?.publishedDate ?? ""}
                        onChange={handleChange}
                        onKeyDown={handleEnter}
                    />
                </div>
                <hr className='rotate-90deg' />

                <div className='d-flex flex-column'>
                    <label htmlFor="rating">Rating</label>
                    <select
                        id='rating'
                        value={book.volumeInfo?.averageRating ?? ""}
                        onChange={handleChange}
                    >
                        <option value="">Select a rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <hr className='rotate-90deg' />

                <div className='d-flex flex-column'>
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
                </div>
            </div>
            <hr />

            <button>Submit</button>
        </form>
    )
};

export default BookForm;