import { useDispatch, useSelector } from "react-redux";
import Book from "../../components/book/Book";
import FavoritesHeader from "../../components/favorites-header/FavoritesHeader";
import { toggleSelectedInFavs } from '../../features/books-slice';
const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.book.favoriteBooks);
  const selecting = useSelector((s) => s.mode.selectingFavorites);

  const toggleSelected = (id) => {
    dispatch(toggleSelectedInFavs(id));
  };

  return (
    <>
      <FavoritesHeader />
      {favorites &&
        <div className="books-div">
          {favorites.length > 0 ?
            favorites.map((b) => <Book key={b.id} book={b} selecting={selecting} toggleSelected={toggleSelected} />)
            : (<h1>No books to show.</h1>)}
        </div>}
    </>
  );
};

export default Favorites;