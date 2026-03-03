import Navbar from './Components/Navbar'
import { MovieProvider } from './Context/MovieContext'
import Favorites from './Pages/Favorites'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <MovieProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </MovieProvider>
  )
}

export default App