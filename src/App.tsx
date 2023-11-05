import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/createuser" element={<CreateUser/>}/>
        <Route path="/index" element={<index/>}/>
        <Route path="*" element={<h1>Not Found.</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
