import React from "react";
import { Typography, Stack } from "@mui/material";

const StepThree = ({ formData }) => {
  return (
    <Stack spacing={2}>
      <Typography><strong>Name:</strong> {formData.name}</Typography>
      <Typography><strong>Email:</strong> {formData.email}</Typography>
      <Typography><strong>Role:</strong> {formData.role}</Typography>
      <Typography><strong>Bio:</strong> {formData.bio}</Typography>
    </Stack>
  );
};

export default StepThree;