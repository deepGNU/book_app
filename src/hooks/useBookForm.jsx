import { useState } from 'react';

const useBookForm = (book) => {
    const [title, setTitle] = useState((book.volumeInfo?.title && book.volumeInfo.title !== 'Untitled') ? book.volumeInfo.title : "");
    const [subtitle, setSubtitle] = useState(book.volumeInfo?.subtitle ?? "");
    const [authors, setAuthors] = useState(book.volumeInfo?.authors ?? "");
    const [language, setLanguage] = useState(book.volumeInfo?.language ?? "");
    const [publisher, setPublisher] = useState(book.volumeInfo?.publisher ?? "");
    const [rating, setRating] = useState(book.volumeInfo?.averageRating ?? "");
    const [description, setDescription] = useState(book.volumeInfo?.description ?? "");
    const [publishedDate, setPublishedDate] = useState(book.volumeInfo?.publishedDate ? new Date(book.volumeInfo.publishedDate).toISOString().slice(0, 10) : "");
    const [image, setImage] = useState(book.volumeInfo?.imageLinks?.thumbnail ?? "");

    const handleTitleChange = (e) => {
        setTitle(e.target.value.trimStart());
    };

    const handleSubtitleChange = (e) => {
        setSubtitle(e.target.value.trimStart());
    };

    const handleAuthorsChange = (e) => {
        setAuthors(e.target.value.trimStart());
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handlePublisherChange = (e) => {
        setPublisher(e.target.value.trimStart());
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value.trimStart());
    };

    const handlePublishedDateChange = (e) => {
        setPublishedDate(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.value.trimStart());
    };

    const getBook = () => {
        let volumeInfo = {
            ...book.volumeInfo,
            title: title ? title : 'Untitled',
            subtitle,
            authors,
            language,
            publisher,
            averageRating: rating,
            description,
            publishedDate,
            imageLinks: {
                ...book.volumeInfo?.imageLinks,
                thumbnail: image
            }
        };

        !subtitle && delete volumeInfo.subtitle;
        !authors && delete volumeInfo.authors;
        !language && delete volumeInfo.language;
        !publisher && delete volumeInfo.publisher;
        !rating && delete volumeInfo.averageRating;
        !description && delete volumeInfo.description;
        !publishedDate && delete volumeInfo.publishedDate;

        return {
            ...book,
            volumeInfo
        };
    };

    return {
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
    };
};

export default useBookForm;