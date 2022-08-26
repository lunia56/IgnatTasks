import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './pages/Header.module.css'

function Header() {
    return (
        <div className={s.slideContainer}>
            <div className={s.slide}>
                <div className={s.slideContent}>
                    <NavLink to={'/pre-junior'}
                             className={({isActive}) => isActive ? s.active : s.text}>PreJunior</NavLink>
                    <NavLink to={'/junior'} className={({isActive}) => isActive ? s.active : s.text}>Junior</NavLink>
                    <NavLink to={'/junior-plus'} className={({isActive}) => isActive ? s.active : s.text}>Junior+</NavLink>
                </div>
                <div className={s.slideHeader}>Nav</div>
            </div>
        </div>
    )
}

export default Header
