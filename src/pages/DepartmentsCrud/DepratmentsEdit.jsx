import { useParams, useNavigate } from 'react-router-dom'
import { useDepartement } from '../../hooks/useDepartment'
import DepartementForm from '../../components/DepartmentsForm/DepartmentsForm'
import Box from '@mui/system/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Skeleton } from '@mui/material'

const DepartmentEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading } = useDepartement(id)

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/departments')}
          sx={{ mb: 3, color: 'text.secondary' }}
        >
          Back to Departments
        </Button>
      </Box>

      {isLoading ? (
        <Box sx={{ p: 2 }}>
          <Skeleton variant="text" width={200} height={40} />
          <Skeleton variant="rounded" height={56} sx={{ mt: 2 }} />
          <Skeleton variant="rounded" height={56} sx={{ mt: 2 }} />
          <Skeleton variant="rounded" height={56} sx={{ mt: 2 }} />
        </Box>
      ) : (
        <DepartementForm initialData={data} />
      )}
    </>
  )
}

export default DepartmentEdit