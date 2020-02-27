import { createSlice } from '@reduxjs/toolkit'

const initial_state = {
	imBusy: true,
    posts: [],
    filter: '',
    filteredPosts: [],
    error: false
}

// store ~ inteligentny obiekt
// akcja ~ funkcją, która zwraca obiekt{type,payload}
// reducer ~ switch(store, akcje)

const { actions, reducer } = createSlice({
	name: 'posts',
	initialState: initial_state,
	reducers: {
        startLoadingPosts(state, action) {
            state.imBusy = true
            state.posts = []
            state.filter = ''
            state.filteredPosts = []
        },
		loadPostsWithSuccess(state, {payload}) {
            state.imBusy = false
            state.posts = payload.posts
            state.filteredPosts = payload.posts
        },
        loadPostsWithFailure(state, {payload}) {
            state.imBusy = false
            state.error = payload
        },
        filterPostsWithPhrase(state, action) {

        }
	},
})

export { actions, reducer }