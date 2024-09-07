"use client"

import style from '../../_styles/nav.module.css';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <nav className={style.nav}>
        <div className={style.inner_nav}>
            <div className='text-2xl'>
                sKadi
            </div>
            <div>
                <MenuIcon fontSize='large'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar