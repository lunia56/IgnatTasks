import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Greeting.module.css'


// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    name: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, name,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${s.superButton} ${red ? s.red : s.default} `

    return (
        <button
            disabled={!name}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
