import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from 'react-router-dom';
import s from './H5.module.css'
import style from './pages/Header.module.css'


function HW5() {
    return (
        <div>

            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <>
                    <div className={s.header}><Header/></div>

                    <div><Pages/></div>
                </>

            </HashRouter>
        </div>
    )
}

export default HW5
