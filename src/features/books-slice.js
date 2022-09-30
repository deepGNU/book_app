import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

const initialState = {
    books: [],
    loading: false,
    error: '',
    query: 'Carl-Sagan',
    filter: 'Partial',
    lang: 'en'
};

export const fetchBooks = createAsyncThunk('books/fetch', (arg, { getState }) => {
    // console.log(filter);
    // console.log("lang " + lang)

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

    //    const query = "flowers+inauthor:keyes";
    // const query = "Isaac Newton";
    // const query = useSelector((s) => s.books.query);
    // const query = "physics";
    // const query = "history";
    // const query = "american history";
    const { query, filter, lang } = getState().book;
    console.log(query, filter, lang)
    return fetch(
        `https://www.googleapis.com/books/v1/volumes` +
        // (query ?? `q=${query}`) +
        `?q=${query}` +
        `&langRestrict=${lang}` +
        // (filter ?? `&filter=${filter}`) +
        `&filter=${filter}` +
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
            const index = state.books.findIndex((b) => b.id === payload);
            state.books[index].isFavorite = !state.books[index].isFavorite;
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
            state.loading = false;
            state.error = false;
        });
        builder.addCase(fetchBooks.rejected, (state, { error }) => {
            state.books = [];
            state.loading = false;
            state.error = error ?? "Something went wrong.";
            console.log(error);
        });
    }
});

export default booksSlice.reducer;
export const { addBook, editBook, deleteBook, toggleFavorite, changeFilter, changeLang, changeQuery } = booksSlice.actions;