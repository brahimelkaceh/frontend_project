# Day 3 — React Router + App Structure

## Starter codebase (mentor branch)

Use this map before Task 1:

| What | Where |
|------|--------|
| Router config | `src/router/index.jsx` |
| Layout (Navbar + Sidebar + `<Outlet />`) | `src/components/Layout/AppLayout.jsx` |
| Auth guard | `src/components/auth/ProtectedRoute.jsx` |
| Auth state (demo) | `src/context/AuthProvider.jsx` + `src/context/authContext.js` + `src/hooks/useAuth.js` |

**Public routes:** `/` (home), `/login` (demo sign-in).

**Protected routes** (inside layout): `/dashboard`, `/wizard` (existing Step wizard).

**`/users` is intentionally missing** until you complete Tasks 2–3. Until then, opening `/users` shows an in-layout “Page not found” note so you know the sidebar link is wired but the page route is still yours to add.

**Navbar title:** hardcoded in `Navbar.jsx` (not Redux — see Task 5).

---

> **Context:** Today is about understanding how navigation works in a React app.
> By end of day you will have two pages wired together with working navigation,
> and you will be able to explain how any page gets its shared layout (Navbar, Sidebar)
> without importing it directly.

---

## TASK 1 — Understand the routing setup

**Description:**
Before adding any new routes, map out everything that already exists.
Reading the router before touching it is a non-negotiable habit —
changing a route you don't understand breaks the whole app.

**Steps:**
1. Find the router configuration file — it is likely one of these:
   - `src/router/index.jsx`
   - `src/router/Router.jsx`
   - Inside `src/App.jsx`
2. Open the file and read every route definition top to bottom
3. Draw a simple diagram of all existing routes — use paper, Excalidraw, or Notion:
   ```
   /                  → HomePage
   /login             → LoginPage
   /dashboard         → DashboardPage
   /users             → (you will add this today)
   ...
   ```
4. For each route identify:
   - The URL path
   - The page component it renders
   - Whether it is protected (requires auth) or public
5. Find the layout component (likely `AppLayout.jsx` or `MainLayout.jsx`)
   - Identify where `<Outlet />` is used inside it
   - Understand how this makes every child route inherit the Navbar and Sidebar
6. Ask your mentor: "How does the auth guard work on protected routes?"
7. Write a short note in your learning log:
   - How many routes exist today?
   - How does a page get the Navbar without importing it?

**Deliverable:**
Route diagram drawn and shared with mentor. You can answer verbally:
"What is the difference between `<Link>` and `useNavigate`?"

- **Difficulty:** Easy
- **Estimated time:** 2h
- **Tags:** `React Router` `Learning` `Architecture`

---

## TASK 2 — Build the UserList page

**Description:**
Create a `UserListPage` that displays a hardcoded list of 3 users.
Each user has a "View" button that navigates to their detail page.
This is the first half of a two-page navigation flow.

**Steps:**
1. Create `src/pages/UserList/UserListPage.jsx`
2. Define a hardcoded array of 3 users at the top of the file:
   ```jsx
   const USERS = [
     { id: 1, name: 'Sarah Johnson', role: 'Admin' },
     { id: 2, name: 'John Smith', role: 'User' },
     { id: 3, name: 'Lisa Chen', role: 'Viewer' },
   ]
   ```
3. Render a MUI `Typography` variant `h4` at the top: `"Users"`
4. Render each user in a MUI `Card` inside a MUI `Stack` with `spacing={2}`:
   - MUI `Typography` for `name`
   - MUI `Typography` variant `body2` color `text.secondary` for `role`
   - MUI `Button` labeled `"View"` — for now it does nothing (wired in Task 3)
5. Add the route in the router config: `path: '/users'`
6. Confirm the page renders correctly at `http://localhost:5173/users`

**Deliverable:**
`/users` renders 3 user cards. Page is visible in the browser.
Route is registered in the router file.

- **Difficulty:** Easy
- **Estimated time:** 1.5h
- **Tags:** `React Router` `MUI` `React`

---

## TASK 3 — Build the UserDetail page

**Description:**
Create a `UserDetailPage` that reads the user ID from the URL
and displays the matching user's information.
This introduces `useParams` — one of the most used React Router hooks.

**Steps:**
1. Create `src/pages/UserDetail/UserDetailPage.jsx`
2. Import and call `useParams`:
   ```jsx
   import { useParams } from 'react-router-dom'
   const { id } = useParams()
   ```
3. Copy the same `USERS` array from `UserListPage` into this file for now
   (you will replace this with a real API call on Day 4)
4. Find the matching user: `const user = USERS.find(u => u.id === Number(id))`
5. Handle the case where the user is not found:
   ```jsx
   if (!user) return <Typography>User not found.</Typography>
   ```
6. Render the user details inside a MUI `Card`:
   - MUI `Typography` variant `h5`: user name
   - MUI `Typography` variant `body1`: user role
   - MUI `Typography` variant `body2` color `text.secondary`: `"ID: {id}"`
7. Add a MUI `Button` labeled `"← Back"` that calls `navigate(-1)`:
   ```jsx
   import { useNavigate } from 'react-router-dom'
   const navigate = useNavigate()
   ```
8. Add the route in the router config: `path: '/users/:id'`
9. Confirm the page renders correctly at `http://localhost:5173/users/1`

**Deliverable:**
`/users/1`, `/users/2`, and `/users/3` each render the correct user.
`/users/999` shows the "User not found" message.
Back button returns to the previous page.

- **Difficulty:** Easy
- **Estimated time:** 1.5h
- **Tags:** `React Router` `useParams` `MUI` `React`

---

## TASK 4 — Wire the two pages together with useNavigate

**Description:**
Connect `UserListPage` and `UserDetailPage` so clicking "View"
on a user card navigates to that user's detail page.
This is how navigation works in every real feature you will build.

**Steps:**
1. Open `src/pages/UserList/UserListPage.jsx`
2. Import `useNavigate` at the top:
   ```jsx
   import { useNavigate } from 'react-router-dom'
   ```
3. Call it inside the component:
   ```jsx
   const navigate = useNavigate()
   ```
4. Wire the "View" button `onClick` to navigate:
   ```jsx
   <Button onClick={() => navigate(`/users/${user.id}`)}>View</Button>
   ```
5. Test the full flow:
   - Go to `/users`
   - Click "View" on Sarah → lands on `/users/1` showing Sarah's details
   - Click "← Back" → returns to `/users`
   - Repeat for all 3 users
6. Open the browser address bar and manually type `/users/99`
   — confirm you see "User not found" and the Back button still works

**Deliverable:**
Full navigation flow works end-to-end: list → detail → back to list.
Works for all 3 users. Edge case (invalid ID) handled gracefully.

- **Difficulty:** Easy
- **Estimated time:** 1h
- **Tags:** `React Router` `useNavigate` `React`

---

## TASK 5 — Explore the layout component

**Description:**
Understand how the Navbar and Sidebar appear on every page
without being imported in each page component.
This is the `Outlet` pattern — you will use it for the rest of your career.

**Steps:**
1. Find the layout component — likely one of:
   - `src/components/Layout/AppLayout.jsx`
   - `src/components/Layout/MainLayout.jsx`
2. Read the full file and find where `<Outlet />` is used
3. Go back to the router config and find how the layout wraps child routes:
   ```jsx
   {
     element: <AppLayout />,
     children: [
       { path: '/users', element: <UserListPage /> },
       { path: '/users/:id', element: <UserDetailPage /> },
       ...
     ]
   }
   ```
4. Confirm your new `/users` and `/users/:id` routes are nested inside
   the layout wrapper — if not, move them inside and test again
5. Identify where the Navbar gets its data from:
   - Is it from Redux? A context? A prop?
   - Ask your mentor if you cannot find the answer in 10 minutes
6. Write a one-paragraph note in your learning log:
   - "The layout wraps pages by using `<Outlet />` which renders..."

**Deliverable:**
Both new pages render with the full layout (Navbar + Sidebar).
You can explain the `Outlet` pattern to your mentor verbally in 60 seconds.

- **Difficulty:** Easy
- **Estimated time:** 1.5h
- **Tags:** `React Router` `Architecture` `Learning`

---

## TASK 6 — Commit and open PR

**Description:**
Every day ends with clean commits and an open PR.
Get into this habit now — it makes code review easier and protects your work.

**Steps:**
1. Stage only the files you changed today — do not commit unrelated files
2. Make 3 separate commits, one per feature:
   ```
   feat: add UserList page with hardcoded users
   feat: add UserDetail page with useParams
   feat: wire UserList to UserDetail with useNavigate
   ```
3. Push the branch and open a PR (or update the existing one from Day 1)
4. PR description must include:
   - What you built today (2–3 sentences)
   - How to test it (which URLs to visit)
   - Any questions or blockers you have
5. Tag your mentor for review

**Deliverable:**
PR open with 3 clean commits and a clear description.
Mentor tagged for review.

- **Difficulty:** Easy
- **Estimated time:** 30min
- **Tags:** `Git`

---

## End of Day Checklist

- [ ] Route diagram drawn and shared with mentor
- [ ] `UserListPage` renders 3 user cards at `/users`
- [ ] `UserDetailPage` renders correct user at `/users/:id`
- [ ] Invalid user ID (`/users/999`) shows "User not found" message
- [ ] "View" button navigates to the correct detail page
- [ ] "← Back" button returns to the list
- [ ] Both pages render inside the shared layout (Navbar + Sidebar visible)
- [ ] Routes are nested inside the layout wrapper in the router config
- [ ] 3 clean commits pushed with correct message format
- [ ] PR open and mentor tagged
- [ ] Learning log updated

---

## Mentor Sync Agenda (EOD — 30 min)

1. Intern shares the route diagram — is it accurate and complete?
2. Live demo: list → detail → back → list (all 3 users + invalid ID)
3. Mentor asks:
   - "What is the difference between `<Link>` and `useNavigate`? When would you use each?"
   - "Why do we nest routes inside the layout component instead of adding the Navbar to every page manually?"
   - "What would happen if you forgot to add `<Outlet />` inside the layout?"
4. Mentor reviews PR description quality — is it clear enough for a teammate who wasn't there?
5. Mentor previews Day 4: Axios, service layer, and the first real API call
