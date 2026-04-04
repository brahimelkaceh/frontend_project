// src/components/DepartmentViewDialog/DepartmentViewDialog.jsx
import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { Box, Typography, Divider, Chip } from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const DepartmentViewDialog = ({ open, onClose, department }) => {
  if (!department) return null

  return (
    <Dialog
      open={open}
      slots={{ transition: Transition }}
      keepMounted
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle fontWeight={700}>
        Department Details
      </DialogTitle>

      <Divider />

      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>

          <Box>
            <Typography variant="overline" color="text.secondary">
              Name
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              {department.name}
            </Typography>
          </Box>

          <Box>
            <Typography variant="overline" color="text.secondary">
              Description
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {department.description || '—'}
            </Typography>
          </Box>

          <Box>
            <Typography variant="overline" color="text.secondary">
              Manager
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              {department.manager?.full_name || '—'}
            </Typography>
            {department.manager?.job_title && (
              <Chip
                label={department.manager.job_title}
                size="small"
                sx={{ mt: 0.5 }}
              />
            )}
          </Box>

        </Box>
      </DialogContent>

      <Divider />

      <DialogActions sx={{ p: 2 }}>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DepartmentViewDialog