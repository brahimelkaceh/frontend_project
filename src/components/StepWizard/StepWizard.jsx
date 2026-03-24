import React from 'react'
import { useState } from 'react';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import Box from '@mui/material/Box'
const StepWizard = () => {
    const [currentStep, setCurrentStep] = useState(1)
const [formData, setFormData] = useState({ name: '', email: '', role: '', bio: '' })
const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
const next = () => setCurrentStep((prev) => prev + 1);
  const back = () => setCurrentStep((prev) => prev - 1);

  return (
  <Box  sx={{
    maxWidth: 500,
    mx: "auto",
    mt: 5,
    p: 4,
    borderRadius: 2,
    boxShadow: 3,
    backgroundColor: "background.paper",
  }}> 

  <div>Step {currentStep} of 3 </div>
  {currentStep === 1 && (<StepOne formData={formData} onChange={handleChange}/>)}
  {currentStep === 2 && (<StepTwo formData={formData} onChange={handleChange}/>)}
  {currentStep === 3 && (<StepThree formData={formData}  />)}
   <button onClick={back} disabled = {currentStep===1}>Previous</button>
   <button onClick={next} disabled = {currentStep===3} >Next</button>

  </Box>
  )

}

export default StepWizard