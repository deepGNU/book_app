import '../books/Books.css';
import { useDispatch, useSelector } from "react-redux";
import { toggleSelectedInFavs } from '../../features/books-slice';
import FavoritesHeader from "../../components/favorites-header/FavoritesHeader";
import Book from '../../components/book/Book';

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
      <div className='books-div'>
        {favorites.length > 0 ?
          favorites.map((b) => <Book key={b.id} book={b} selecting={selecting} toggleSelected={toggleSelected} />)
          : (<h1>No books to show.</h1>)}
      </div>
    </>
  );
};

export default Favorites;