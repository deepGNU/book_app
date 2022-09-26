import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../features/books-slice";

const useBooks = () => {
    const dispatch = useDispatch();
    const filter = useSelector((s) => s.book.filter);
    const lang = useSelector((s) => s.book.lang);

    useEffect(() => {
        dispatch(fetchBooks({filter, lang}));
    }, [dispatch, filter, lang]);
};

export default useBooks;