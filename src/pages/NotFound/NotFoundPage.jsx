import Typography from '@mui/material/Typography'

/**
 * Shown for unknown paths under the authenticated layout.
 * Until Task 2 is done, `/users` may land here — then replace with UserListPage.
 */
export default function NotFoundPage() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Page not found
      </Typography>
      <Typography color="text.secondary">
        There is no route for this URL yet. If you expected the Users list, complete
        Day 3 Task 2 and register <code>/users</code> in the router.
      </Typography>
    </>
  )
}
