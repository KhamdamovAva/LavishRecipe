import { Link } from "react-router-dom"
import logo from "../../assets/main_logo.png"

function Header() {
  return (
    <header className='header min-h-[80px] bg-[#fdf9f2;] border border-b-[#8a5d0f] sticky top-0 '>
        <div className="main__container">
           <div className="header__content flex justify-between items-center pt-[15px]">
                <div className='header__content-logo '>
                  <Link to="/">
                    <img src={logo} alt="logo" className='w-[190px]'/>
                  </Link>
                </div>
                <nav className='nav flex uppercase text-[14px] text-[#8a5d0f] space-x-7'>
                    <Link to="/" className=''>Home</Link>
                    <Link to="/ingredients">Ingredients</Link>
                    <Link to="/areas">Areas</Link>
                </nav>
           </div>
        </div>
    </header>
  )
}

export default Header
