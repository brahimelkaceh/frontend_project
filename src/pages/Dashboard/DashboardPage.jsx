import Typography from '@mui/material/Typography'

/** Protected route: `/dashboard` */
export default function DashboardPage() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography color="text.secondary">
        You are inside the shared layout (navbar + sidebar). Open{' '}
        <strong>Users</strong> in the sidebar after you complete Day 3 Task 2.
      </Typography>
    </>
  )
}
