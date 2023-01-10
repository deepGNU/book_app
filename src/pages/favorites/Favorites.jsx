// import { useEffect } from "react";
import { useSelector } from "react-redux";
import Book from "../../components/book/Book";
// import { updateFavorites } from "../../features/books-slice";

const Favorites = () => {
  // const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorite.favBooks);
  // const books = useSelector((s) => s.book.books);
  // const favorites = useSelector((s) => s.book.favoriteBooks);

  // useEffect(() => {
  //   dispatch(updateFavorites());
  // }, [books]);

  return (
    favorites  &&
    <div className="books-div">
      {favorites.map((b) => <Book key={b.id} book={b} isOnSelectingMode={false} />)}
    </div>
  );
};

export default Favorites;