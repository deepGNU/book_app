import "./App.css";
import { Route, Routes } from "react-router-dom";
import TopNav from "./components/nav/TopNav";
import useBooks from "./hooks/useBooks";
import About from "./pages/about/About";
import BookDetails from "./pages/bookdetails/BookDetails";
import Books from "./pages/books/Books";
import Favorites from "./pages/favorites/Favorites";
import NotFound404 from "./pages/notfound404/NotFound404";
import BookEditWindow from "./components/bookeditwindow/BookEditWindow";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import BookAddWindow from "./components/bookaddwindow/BookAddWindow";
import useScrollToTopOfNewPage from "./hooks/useScrollToTopOfNewPage";

function App() {
  useBooks();
  useScrollToTopOfNewPage();
  const editing = useSelector((s) => s.mode.editing);
  const adding = useSelector((s) => s.mode.adding);
  const loading = useSelector((s) => s.book.loading);

  return (
    <div className={`App ${loading && 'overflow-hidden'}`}>
      <ToastContainer />
      <TopNav />
      {editing && <BookEditWindow />}
      {adding && <BookAddWindow />}
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:bookId" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound404" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
