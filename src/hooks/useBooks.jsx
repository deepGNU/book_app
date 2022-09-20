import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../features/books-slice";

const useBooks = () => {
    const dispatch = useDispatch();
    const filter = useSelector((s) => s.book.filter);

    useEffect(() => {
        dispatch(fetchBooks(filter));
    }, [dispatch, filter]);
};

export default useBooks;