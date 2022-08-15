import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (priority: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    const setClass = (filter: FilterType) => {
        return s.button + (props.filter === filter ? ' ' + s.active : '')
    }
    return (
        <div className={s.container}>

            {mappedAffairs}

            {/*<button className={cnAll} onClick={setAll}>All</button>*/}
            {/*<button className={cnHigh} onClick={setHigh}>High</button>*/}
            {/*<button className={cnMiddle} onClick={setMiddle}>Middle</button>*/}
            {/*<button className={cnLow} onClick={setLow}>Low</button>*/}

            <button className={setClass('all')}
                    onClick={set}
                    value={'all'}>All
            </button>
            <button className={setClass('high')}
                    onClick={set}
                    value={'high'}>High
            </button>
            <button className={setClass('middle')}
                    onClick={set}
                    value={'middle'}>Middle
            </button>
            <button className={setClass('low')}
                    onClick={set}
                    value={'low'}>Low
            </button>
        </div>
    )
}

export default Affairs
