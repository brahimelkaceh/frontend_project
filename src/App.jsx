
import './App.css'
import StepWizard from './components/StepWizard/StepWizard'
import UserCard from './components/UserCard/UserCard'
import ThemeToggle from './components/ThemeToggle/ThemeToggle.jsx'
// onboarding: Anas EL BALILI set up ✓
function App() {


  return (
    <>
     
    <StepWizard/>
      <ThemeToggle/>


      <UserCard name="Sarah" role="Admin" />


      
    </>
  )
}

export default App

