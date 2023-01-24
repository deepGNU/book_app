// import { useEffect } from "react";
import { useSelector } from "react-redux";
import Book from "../../components/book/Book";
import BooksBtns from "../../components/books-header/BooksBtns";
import Filters from "../../components/books-header/Filters";
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
    <>
      <BooksBtns />
      <Filters />
      {favorites &&
      <div className="books-div">
        {favorites.length > 0 ?
          favorites.map((b) => <Book key={b.id} book={b} isOnSelectingMode={false} />)
          : (<h1>No books to show.</h1>)}
      </div>}
    </>
  );
};

export default Favorites;