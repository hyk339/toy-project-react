import Home from "./pages/Home"
import Notfound from "./pages/Notfound"
import {Routes, Route} from "react-router-dom"

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Notfound/>}/>
    </Routes>

  )
}

export default App
