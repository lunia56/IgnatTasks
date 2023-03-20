import s from './Loader.module.css'
import spinner from './spinner.gif'

export const Loader = () =>
    <div className={s.loader} ><img src={spinner}/></div>
