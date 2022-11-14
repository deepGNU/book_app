import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';

const initialState = {
    books: [],
    filteredBooks: [],
    favoriteBooks: [],
    loading: false,
    error: '',
    query: null,
    filter: null,
    lang: null
};

export const fetchBooks = createAsyncThunk('books/fetch', (arg, { getState }) => {

    // return fetch('../data.json', {
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((json) => json.items)
    //     .then((books) => books.map((b) => ({
    //         ...b,
    //         isFavorite: false
    //     })));

    const { query, filter, lang } = getState().book;

    return fetch(
        `https://www.googleapis.com/books/v1/volumes` +
        `?q=${query}` +
        (lang != undefined ?? `&langRestrict=${lang}`) +
        (filter != undefined ?? `&filter=${filter}`) +
        `&maxResults=40` +
        `&key=AIzaSyBvRxCh4SRMHlh1s87QhItZwqVOEqKNyR0`
    )
        .then((response) => response.json())
        .then((json) => json.items)
        .then((books) => books.map((b) => ({
            ...b,
            isFavorite: false
        })));
});

const booksSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        filterBooks: (state, { payload }) => {
            state.filteredBooks = payload;
        },
        addBook: (state, { payload }) => {
            state.books.splice(0, 0, payload);
        },
        editBook: (state, { payload }) => {
            const index = state.books.findIndex((b) => b.id === payload.id);
            state.books[index] = payload;
        },
        deleteBook: (state, { payload }) => {
            const index = state.books.findIndex((b) => b.id === payload);
            state.books.splice(index, 1);
        },
        toggleFavorite: (state, { payload }) => {
            const indexBooks = state.books.findIndex((b) => b.id === payload);
            state.books[indexBooks].isFavorite = !state.books[indexBooks].isFavorite;
        },
        updateFavorites: (state) => {
            state.books.forEach(b => {
                const indexInFavs = state.favoriteBooks.findIndex(f => f.id === b.id);
                const isInFavs = indexInFavs !== -1;

                if (b.isFavorite) {
                    if (isInFavs) state.favoriteBooks[indexInFavs] = b;
                    else state.favoriteBooks.splice(0, 0, b);
                }
                else if (isInFavs) state.favoriteBooks.splice(indexInFavs, 1);
            });
        },
        changeFilter: (state, { payload }) => {
            state.filter = payload;
        },
        changeLang: (state, { payload }) => {
            state.lang = payload;
        },
        changeQuery: (state, { payload }) => {
            state.query = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.books = [];
            state.loading = true;
            state.error = '';
        });
        builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
            state.books = payload;
            state.filteredBooks = payload;
            state.loading = false;
            state.error = false;
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.books = [];
            state.loading = false;
            state.error = action.error ?? "Something went wrong.";
            // console.log(error);
            Swal.fire({
                icon: "error",
                title: "Unable to load books.",
            });
        });
    }
});

export default booksSlice.reducer;
export const { filterBooks, addBook, editBook, deleteBook, toggleFavorite, updateFavorites, changeFilter, changeLang, changeQuery } = booksSlice.actions;