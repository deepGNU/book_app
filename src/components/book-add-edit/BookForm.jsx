import './BookForm.css';
import iso6391 from 'iso-639-1';
import useEsc from '../../hooks/useEsc';
import useBookForm from '../../hooks/useBookForm';
import CloseBtn from './CloseBtn';
import languageCodes from './language-codes';

const BookForm = ({ bookData, onSubmit, onClose }) => {
    useEsc(onClose);

    const {
        title,
        handleTitleChange,
        subtitle,
        handleSubtitleChange,
        authors,
        handleAuthorsChange,
        language,
        handleLanguageChange,
        publisher,
        handlePublisherChange,
        rating,
        handleRatingChange,
        description,
        handleDescriptionChange,
        publishedDate,
        handlePublishedDateChange,
        image,
        handleImageChange,
        getBook
    } = useBookForm(bookData);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(getBook());
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };

    return (
        <form className='book-form position-fixed-centered' onSubmit={handleSubmit}>
            <CloseBtn onClose={handleCloseClick} />

            {/* Title input */}
            <label htmlFor="title">Title</label>
            <input
                id='title'
                type="text"
                value={title}
                onChange={handleTitleChange}
                onKeyDown={handleEnter}
            />
            <hr />
            {/* End of title input */}

            {/* Subtitle input */}
            <label htmlFor="subtitle">Subtitle</label>
            <input
                id='subtitle'
                type="text"
                value={subtitle}
                onChange={handleSubtitleChange}
                onKeyDown={handleEnter}
            />
            <hr />
            {/* End of subtitle input */}

            {/* Authors input */}
            <label htmlFor="authors">Authors</label>
            <input
                id='authors'
                type="text"
                value={authors}
                onChange={handleAuthorsChange}
                onKeyDown={handleEnter}
            />
            <hr />
            {/* End of authors input */}

            {/* Publisher input */}
            <label htmlFor="publisher">Publisher</label>
            <input
                id='publisher'
                type="text"
                value={publisher}
                onChange={handlePublisherChange}
                onKeyDown={handleEnter}
            />
            <hr />
            {/* End of publisher input */}

            {/* Image input */}
            <label htmlFor="image">Image URL</label>
            <input
                id='image'
                type="text"
                value={image}
                onChange={handleImageChange}
                onKeyDown={handleEnter}
            />
            <hr />
            {/* End of image input */}

            {/* Description input */}
            <label htmlFor="description">Description</label>
            <textarea
                id='description'
                value={description}
                onChange={handleDescriptionChange}
            />
            <hr />
            {/* End of description input */}

            <div className='select-inputs'>
                {/* Published date input */}
                <div className='d-flex flex-column'>
                    <label htmlFor="publishedDate">Published Date</label>
                    <input
                        id='publishedDate'
                        type="date"
                        value={publishedDate}
                        onChange={handlePublishedDateChange}
                        onKeyDown={handleEnter}
                    />
                </div>
                <hr />
                {/* End of published date input */}

                {/* Rating input */}
                <div className='d-flex flex-column'>
                    <label htmlFor="rating">Rating</label>
                    <select
                        id='rating'
                        value={rating}
                        onChange={handleRatingChange}
                    >
                        <option value="">Select a rating</option>
                        <option value="0.5">0.5</option>
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                        <option value="3.5">3.5</option>
                        <option value="4">4</option>
                        <option value="4.5">4.5</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <hr />
                {/* End of rating input */}

                {/* Language input */}
                <div className='d-flex flex-column'>
                    <label htmlFor="language">Language</label>
                    <select
                        id='language'
                        value={language}
                        onChange={handleLanguageChange}
                    >
                        <option value="">Select a language</option>
                        {languageCodes.map(code => {
                            const language = iso6391.getName(code);
                            return language &&
                                <option key={code} value={code}>{language}</option>
                        })}
                    </select>
                </div>
                {/* End of language input */}
            </div>
            <hr />

            <button>Submit</button>
        </form>
    )
};

export default BookForm;