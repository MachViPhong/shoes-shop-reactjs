import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import style from './HomeTemplates.module.css';

export default class HomeTemplates extends Component {
  render() {
    return (
      <div>
        <div className="row mx-auto justify-content-center align-items-start">
          <div className="col-3" style={{marginTop: 300}}>

            <header className={`text-white p-2 nav row`}>
              <NavLink className={({ isActive }) => isActive ? 'nav-link bg-white text-dark border border-2 border-info col-12' : 'nav-link text-dark col-12'} to='/home'>Home</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'nav-link bg-white text-dark border border-2 border-info col-12' : 'nav-link text-dark col-12'} to='/shop'>Shop</NavLink>

            </header>

          </div>
          <div className="col-8 content border border-info border-2 m-5" style={{ minHeight: '75vh' }}>
            <Outlet />
          </div>
        </div>


        {/* <header className='bg-dark text-white p-5'>Footer</header> */}

      </div>
    )
  }
}
