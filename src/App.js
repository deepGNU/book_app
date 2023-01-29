import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import useBooks from "./hooks/useBooks";
import useScrollToTop from "./hooks/useScrollToTop";
import TopNav from "./components/nav/TopNav";
import BookEditWindow from "./components/book-add-edit/BookEditForm";
import BookAddWindow from "./components/book-add-edit/BookAddForm";
import Books from "./pages/books/Books";
import Favorites from "./pages/favorites/Favorites";
import BookDetails from "./pages/book-details/BookDetails";
import About from "./pages/about/About";
import NotFound404 from "./pages/not-found-404/NotFound404";

function App() {
  useBooks();
  useScrollToTop();
  const editing = useSelector((s) => s.mode.editing);
  const adding = useSelector((s) => s.mode.adding);

  return (
    <div className='App'>
      <ToastContainer />
      <TopNav />
      {editing && <BookEditWindow />}
      {adding && <BookAddWindow />}
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/books/:bookId" element={<BookDetails />} />
        <Route path="/favorites/:bookId" element={<BookDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
};

export default App;
