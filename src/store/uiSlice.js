// uiSlice.js
// This slice manages global UI state — things that live in the browser only.
// It should NOT store any data fetched from the API (that is React Query's job).
//
// This slice should manage:
//   - sidebarOpen: boolean — whether the sidebar is open or closed
//   - theme: string        — 'light' or 'dark'
//   - notificationsOpen: boolean — whether the notifications panel is open
//
// TODO: implement this slice using createSlice from @reduxjs/toolkit
// TODO: define initialState with the 3 values above
// TODO: write 3 reducers: toggleSidebar, setTheme, toggleNotifications
// TODO: export the actions and the reducer

// eslint-disable-next-line no-unused-vars -- scaffold: remove once you use createSlice below
import { createSlice } from '@reduxjs/toolkit'

// TODO: define initialState here

// TODO: create the slice here using createSlice

// TODO: export actions here

// TODO: export reducer as default here

const initialState = {
  sidebarOpen: false,
  theme: 'light',
  notificationsOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },

    setTheme: (state, action) => {
      state.theme = action.payload
    },
    toggleNotifications: (state) => {
      state.notificationsOpen = !state.notificationsOpen
    },
  },
})


export const {toggleSidebar,setTheme,toggleNotifications} = uiSlice.actions
export default uiSlice.reducer


//Scenario A: The list of users fetched from GET /users --> Use React Query because it handles server data well, like caching, loading, and updating automatically
//Scenario B: Whether the confirmation dialog is open or closed --> Use useState because it's simple local UI state. No need for Redux or React Query
//Scenario C: The currently logged-in user's name and role -->  Use Redux because many parts of the app need this global user info
//Scenario D: The search term typed in a filter input --> Use useState because it's temporary, local state inside the component
//Scenario E: The list of notifications fetched from GET /notifications --> Use React Query because it's server data that changes often and needs caching and updates. 