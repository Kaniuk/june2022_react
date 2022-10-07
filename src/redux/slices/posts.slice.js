import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../../services";
import {userActions} from "./user.slice";


let initialState = {
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
    postFromAPI: null
};

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getAll();

            return data;

        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload;
        },
        deleteById: (state, action) => {
            const filtered = state.posts.filter((post) => post.id !== action.payload);
            state.posts = filtered;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(userActions.setCurrentUser.type, (state) => {
                state.currentPost = null;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.postFromAPI = action.payload;
            })

});


const {reducer: postReducer, actions: {setCurrentPost,deleteById}} = postSlice;

const postActions = {
    getAll,
    setCurrentPost,
    getById,
    deleteById
};

export {
    postReducer,
    postActions
};
