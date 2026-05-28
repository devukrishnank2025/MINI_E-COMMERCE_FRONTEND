import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const baseUrl = import.meta.env.VITE_API_URL

export const addProduct = createAsyncThunk(
    "addProduct"
    , async (data) => {
        const response = await axios.post(`${baseUrl}addProduct`, data);
        console.log(`${baseUrl}/addProduct`);


        return response.data;
    })

export const readProduct = createAsyncThunk(
    "readProduct",
    async ({ pageNo, search, sort, category }) => {
        const response = await axios.get(`${baseUrl}readProduct`, {
            params: { pageNo, search, sort, category }
        });

        return response.data;
    }
)

const productReducers = createSlice({
    name: "productreducers",
    initialState: {
        products: [],
        loading: false,
        error: null,
        totalPageNo: 1,
        pageNo: 0,
        search: "",
        sort: "",
        category: ""

    },
    reducers: {
        increment: (state) => { state.pageSkip += 1 },
        decrement: (state) => { if (state.pageSkip > 0) state.pageSkip -= 1 },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setPageNo: (state, action) => {
            state.pageNo = action.payload
        }

    },
    extraReducers: (builder) => {

        builder
            .addCase(addProduct.pending, (state, action) => {
                state.loading = true

            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false
                state.products.push(action.payload.file)

            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
            .addCase(readProduct.pending, (state, action) => {
                state.loading = true

            })
            .addCase(readProduct.fulfilled, (state, action) => {
                state.loading = false
                state.products = [...action.payload.data]
                state.totalPageNo = action.payload.totalPages

            })
            .addCase(readProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
})

export const { increment, decrement, setSearch, setCategory, setSort, setPageNo } = productReducers.actions;

export default productReducers.reducer;