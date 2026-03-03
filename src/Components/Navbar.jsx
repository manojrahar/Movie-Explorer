import { Weight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-teal-400 text-black p-5 flex justify-between font-bold text-xl'>
        <NavLink to={'/'}>Movie App</NavLink>
        <div className='flex gap-10'>
          <NavLink to={'/'} style={({isActive}) => ({
            color: isActive ? 'red' : 'black',
            fontSize: isActive ? '18px' : '15px',
          })}>Home</NavLink>
          <NavLink to={'/favorites'} style={({isActive}) => ({
            color: isActive ? 'red' : 'black',
            fontSize: isActive ? '18px' : '15px',
          })}>Favorites</NavLink>
        </div>  
        
    </div>
  )
}

export default Navbar