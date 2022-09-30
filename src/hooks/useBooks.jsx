import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../features/books-slice";

const useBooks = () => {
    const dispatch = useDispatch();
    const filter = useSelector((s) => s.book.filter);
    const lang = useSelector((s) => s.book.lang);
    const query = useSelector((s) => s.book.query);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch, filter, lang, query]);
};

export default useBooks;