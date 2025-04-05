import Home from "./pages/Home"
import Notfound from "./pages/Notfound"
import {Routes, Route} from "react-router-dom"

import {createContext, useState} from 'react'

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지


export const NewsStateContext = createContext(); // new 데이터를 공급할 context
export const NewsDispatchContext = createContext(); 


const mockData = [
  {
    id : 1,
    content : "삼성전자 주주 환원을 위해 자사주 1조 규모 매입 발표",
    date : new Date().getTime()
  },
  {
    id : 2,
    content : "SK하이닉스 1분기 HDM 수출 10조 돌파",
    date : new Date().getTime()
  },
  {
    id : 3,
    content : "하이브 완전체 활동 주가 방향 긍정적",
    date : new Date().getTime()
  },
]

function App() {
  // dispatch : 발송하다, 급송하다 
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [newsData, setNews] = useState(mockData);
  

  
  return (
    
    <NewsStateContext.Provider value={newsData}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </NewsStateContext.Provider>
    
  )
}

export default App
