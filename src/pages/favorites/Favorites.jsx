import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BookItem from "../../components/bookitem/BookItem";
import { updateFavorites } from "../../features/books-slice";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorite.books);
  // const books = useSelector((s) => s.book.books);
  // const favorites = useSelector((s) => s.book.favoriteBooks);

  // useEffect(() => {
  //   dispatch(updateFavorites());
  // }, [books]);

  return (
    favorites  &&
    <div className="books-div">
      {favorites.map((b) => <BookItem key={b.id} book={b} />)}
    </div>
  );
};

export default Favorites;