import { Link } from 'react-router-dom';
import logo from '../../assets/main_logo.png';

function Footer() {
  return (
    <footer className='min-h-[200px] bg-[#fdf9f2;] border border-t-[#8a5d0f]'>
        <div className="main__container">
          <div className='flex items-center pt-[70px]'>
            <div>
                <Link to="/">
                  <img src={logo} alt="logo" className='w-[190px]'/>
                </Link>
            </div>
            <div className='w-[90%] text-center'>
              <p className='text-[#8a5d0f]'>
                Built by <a href="https://okoyecharles.com" className='underline text-[#c28419]'>Okoye Charles</a> and <a href="https://eaadonu.vercel.app" className='underline text-[#c28419]'>Ernest Adonu</a>
              </p>
              <p className='text-[#8a5d0f]'>
                Content provided by <a className='underline text-[#c28419]' href="https://themealdb.com">themealdb.com</a></p>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
