import { useSelector } from "react-redux";
import BookItem from "../../components/bookitem/BookItem";

const Favorites = () => {
  const favorites = useSelector((s) => s.book.books).filter((b) => b.isFavorite);

  return (
    <div className="books-div">
      <h1>Favorites</h1>
      {favorites.map((b) => <BookItem key={b.id} book={b} />)}
    </div>
  )
}

export default Favorites