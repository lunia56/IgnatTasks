import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        const id: number = +setInterval(() => {
            setDate(new Date())
            // setDate
        }, 1000)
        setTimerId(id)
        //     const d = new Date()
        //  return document.getElementById('timeID')
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    }

    const stop = () => {
        clearInterval(timerId)
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        setTimerId(undefined)
    }

    const onMouseEnter = () => {
        setShow(true)// пишут студенты // показать дату если наведена мышка

    }
    const onMouseLeave = () => {
        setShow(false)// пишут студенты // спрятать дату если мышка не наведена

    }

    const stringTime = date?.toLocaleTimeString('ru-RU') || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = date?.toLocaleDateString('ru-RU') || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturdays'];
    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    // const stringDay = days[new Date().getDay()] || <br/>; // пишут студенты
    // const stringMonth = months[new Date().getMonth()] || <br/> // пишут студенты
    const stringDay = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date) || <br/>
    const stringMonth = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date) || <br/>

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>

                            <span id={'hw9-date'}>{stringDate}</span>,{' '}
                            <span id={'hw9-month'}>{stringMonth}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId}
                    // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
