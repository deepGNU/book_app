import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../features/books-slice";

const useBooks = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);
};

export default useBooks;