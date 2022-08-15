import React from 'react'
import style from './Message.module.css';

export type messageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message(props: messageDataType) {
    return (
        <>
            <img
                src={props.avatar} alt={'#'}
                className={style.avatar}/>
            <div className={style.message}>
                <div className={style.textName}>{props.name}</div>
                <div className={style.textMessage}
                >{props.message}
                </div>
                <div className={style.time}>{props.time}</div>
            </div>
        </>

    )
}

export default Message
