import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInput from './SuperInput';
import SuperButton from './SuperButton';
import style from './SuperInput.module.css'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter,} // деструктуризация пропсов
) => {
    const inputClass = error ? style.errorInput : style.superInput // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <SuperInput value={name} onChange={setNameCallback} className={inputClass} onKeyDown={onEnter}
                        onBlur={setNameCallback} error={error}/>

            <SuperButton onClick={addUser} name={name}>add</SuperButton>
            <span className={s.totalUsers}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
