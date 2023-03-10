import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Content from './pages/Content'
import Home from './pages/Home'
import Login from './pages/Login'
import { AuthContext } from './utils/auth'
import { UserStore } from './utils/UserContext'

function App() {

  const existingToken = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingToken);
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data))
    setAuthTokens(data);
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
        <UserStore>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="content/*" element={<Content />} />
          </Routes>
          <Footer />
        </UserStore>
      </AuthContext.Provider>
    </div>
  )
}

export default App
