import './App.css'
import { ModeToggle } from './components/darkmode/mode-toggle'
import { ThemeProvider } from './components/darkmode/theme-provider'
import LandingPage from './components/landing-page/LandingPage'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle/>
      <LandingPage/>
    </ThemeProvider>
  )
}

export default App
