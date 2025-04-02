import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import './index.css'

createRoot(document.getElementById('root')).render(
    // BrowserRouter는 브라우저의 현재 주소를 저장하고 감지하는 역할을 한다.
      <BrowserRouter>
        <App />
      </BrowserRouter>
    
)
