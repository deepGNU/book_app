import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    filteredBooks: [],
    favoriteBooks: [],
    loading: false,
    error: '',
    query: null,
    numSelectedInBooks: 0,
    numSelectedInFavs: 0,
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
    const API_KEY = 'AIzaSyBvRxCh4SRMHlh1s87QhItZwqVOEqKNyR0';
    const { query } = getState().book;
    // const { favBooks } = getState().favorite;
    const favBooks = getState().book.favoriteBooks;
    const isInFavs = (id) => favBooks.findIndex((f) => f.id === id) !== -1;

    return fetch(
        `https://www.googleapis.com/books/v1/volumes` +
        `?q=${query}` +
        `&maxResults=40` +
        `&key=${API_KEY}`
    )
        .then((response) => response.json())
        .then((json) => json.items)
        .then((books) => books.map((b) =>
            isInFavs(b.id) ? favBooks.find((f) => f.id === b.id)
                : ({
                    ...b,
                    volumeInfo: {
                        ...b.volumeInfo,
                        authors: b.volumeInfo?.authors?.join(', ') ?? [],
                    },
                    isFavorite: false,
                    isSelected: false,
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
            const indexBooks = state.books.findIndex((b) => b.id === payload.id);
            const indexFavorites = state.favoriteBooks.findIndex((f) => f.id === payload.id);
            if (indexBooks !== -1)
                state.books[indexBooks] = payload;
            if (indexFavorites !== -1)
                state.favoriteBooks[indexFavorites] = payload;
        },
        deleteBook: (state, { payload }) => {
            const indexBooks = state.books.findIndex((b) => b.id === payload);
            const indexFavorites = state.favoriteBooks.findIndex((f) => f.id === payload);
            if (indexBooks !== -1)
                state.books.splice(indexBooks, 1);
            if (indexFavorites !== -1)
                state.favoriteBooks.splice(indexFavorites, 1);
        },
        deleteSelectedInBooks: (state) => {
            state.books.filter((b) => b.isSelected).forEach((b) => {
                state.favoriteBooks = state.favoriteBooks.filter((f) => f.id !== b.id);
            });
            state.books = state.books.filter((b) => !b.isSelected);
            state.numSelectedInBooks = 0;
        },
        deleteSelectedInFavs: (state) => {
            state.favoriteBooks.filter((f) => f.isSelected).forEach((f) => {
                state.books = state.books.filter((b) => b.id !== f.id);
            });
            state.favoriteBooks = state.favoriteBooks.filter((f) => !f.isSelected);
            state.numSelectedInFavs = 0;
        },
        cancelSelectionInBooks: (state) => {
            state.books.forEach((b) =>
                b.isSelected = false);
            state.numSelectedInBooks = 0;
        },
        cancelSelectionInFavs: (state) => {
            state.favoriteBooks.forEach((f) =>
                f.isSelected = false);
            state.numSelectedInFavs = 0;
        },
        toggleSelectedInBooks: (state, { payload }) => {
            const indexBooks = state.books.findIndex((b) => b.id === payload);
            const isSelected = state.books[indexBooks].isSelected;
            isSelected ? state.numSelectedInBooks-- : state.numSelectedInBooks++;
            state.books[indexBooks].isSelected = !isSelected;
        },
        toggleSelectedInFavs: (state, { payload }) => {
            const indexFavorites = state.favoriteBooks.findIndex((f) => f.id === payload);
            const isSelected = state.favoriteBooks[indexFavorites].isSelected;
            isSelected ? state.numSelectedInFavs-- : state.numSelectedInFavs++;
            state.favoriteBooks[indexFavorites].isSelected = !isSelected;
        },
        toggleFavorite: (state, { payload }) => {
            const indexBooks = state.books.findIndex((b) => b.id === payload);
            const indexFavorites = state.favoriteBooks.findIndex((f) => f.id === payload);
            if (indexBooks !== -1)
                state.books[indexBooks].isFavorite = !state.books[indexBooks].isFavorite;
            if (indexFavorites !== -1)
                state.favoriteBooks.splice(indexFavorites, 1);
            else
                state.favoriteBooks.splice(0, 0, state.books[indexBooks]);
        },
        // updateFavorites: (state) => {
        //     state.books.forEach(b => {
        //         const indexInFavs = state.favoriteBooks.findIndex(f => f.id === b.id);
        //         const isInFavs = indexInFavs !== -1;

        //         if (b.isFavorite) {
        //             if (isInFavs) state.favoriteBooks[indexInFavs] = b;
        //             else state.favoriteBooks.splice(0, 0, b);
        //         }
        //         else if (isInFavs) state.favoriteBooks.splice(indexInFavs, 1);
        //     });
        // },
        // changeFilter: (state, { payload }) => {
        //     state.filter = payload;
        // },
        // changeLang: (state, { payload }) => {
        //     state.lang = payload;
        // },
        changeQuery: (state, { payload }) => {
            state.query = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.books = [];
            state.loading = true;
            state.numSelected = 0;
            state.error = '';
        });
        builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
            state.books = payload;
            state.filteredBooks = payload;
            state.loading = false;
            state.numSelected = 0;
            state.error = '';
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.books = [];
            state.filteredBooks = [];
            state.loading = false;
            state.numSelected = 0;
            state.error = action.error ?? "Something went wrong.";
        });
    }
});

export default booksSlice.reducer;
export const { filterBooks, addBook, editBook, deleteBook, toggleFavorite, changeQuery, toggleSelectedInBooks, toggleSelectedInFavs, cancelSelectionInBooks, cancelSelectionInFavs, deleteSelectedInBooks, deleteSelectedInFavs } = booksSlice.actions;