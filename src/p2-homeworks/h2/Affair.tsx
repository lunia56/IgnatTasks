import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const cnPriority = `${s.priority} ${s[props.affair.priority]}`

    return (
        <div>
            <span className={s.span}>{props.affair.name + '  '}</span>
            <span className={cnPriority}>{props.affair.priority}</span>
            <button className={s.removeButton} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
