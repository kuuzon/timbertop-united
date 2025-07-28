import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// CSS Reset & Typography
import './styles/resets.css'
import './styles/typography.css'

// Global styling
import 'bootstrap/dist/css/bootstrap.min.css';
import "@theme-toggles/react/css/Within.css"
import 'react-toastify/dist/ReactToastify.css';

// Root component
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)