import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    loading: false,
    error: '',
};

export const fetchBooks = createAsyncThunk('books/fetch', () => {
    return fetch('../data.json', {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    })
        .then((response) => response.json())
        .then((json) => json.items)
        .then((books) => books.map((b) => ({
            ...b,
            isFavorite: false
        })))
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
export const { addBook, editBook, deleteBook, toggleFavorite } = booksSlice.actions;