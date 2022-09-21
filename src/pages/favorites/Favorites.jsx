import { useSelector } from "react-redux";
import BookItem from "../../components/bookitem/BookItem";
import { ToastContainer } from 'react-toastify';

const Favorites = () => {
  const favorites = useSelector((s) => s.book.books).filter((b) => b.isFavorite);

  return (
    <div className="books-div">
      <h1>Favorites</h1>
      <ToastContainer />
      {favorites.map((b) => <BookItem key={b.id} book={b} />)}
    </div>
  )
}

export default Favorites