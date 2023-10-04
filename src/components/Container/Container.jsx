import React from 'react';
import {Routes, Route, NavLink} from "react-router-dom"
import Home from '../Home/Home';
import Error from '../Error/Error';
import About from '../About/About';
import Users from '../Users/Users';
import User  from '../User/User';
import Contact from '../Contact/Contact';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import {useTheme} from "../Context/UseContext";

function Container() {
  const {theme, setTheme} = useTheme();
  return (
    <div className={`container app ${theme}`}>
      <div className="row ">
        <nav>
          <div>
             <button id='btnTheme' className={`float-start theme-btn-${theme}`}
               onClick={() => setTheme(theme === "light" ? "dark":"light")}
             >
               <BootstrapSwitchButton checked={true} onstyle="light" offstyle="dark" style="round" 
                onlabel='light' offlabel='dark'
                />
             </button>
          </div>
          <div className='nav-items'>
          <ul>
            <li><NavLink  to={"/"}>Home</NavLink></li>
            <li><NavLink  to={'/users'}>Users</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>
          </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<User />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </div>
  )
}

export default Container;
