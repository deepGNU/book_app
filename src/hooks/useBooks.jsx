import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../features/books-slice";

const useBooks = () => {
    const dispatch = useDispatch();
    const query = useSelector((s) => s.book.query);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch, query]);
};

export default useBooks;