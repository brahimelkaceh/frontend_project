// TODO: import and register your uiSlice reducer here
// Example: import uiReducer from './uiSlice'
// Until you add a reducer key below, Redux Toolkit may log a dev-only hint about an empty reducer map — that is expected.

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    // ui: uiReducer — add this after you create uiSlice.js
  },
})

/**
 * @typedef {ReturnType<typeof store.getState>} RootState
 * @typedef {typeof store.dispatch} AppDispatch
 */
