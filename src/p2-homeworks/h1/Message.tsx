import React from 'react'
import style from './Message.module.css';

export type messageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
    // callBack: (props: any) => void
}
// export type messagePropsType = {
//     state: messageDataType
//     // callBack: (props: any) => void
// }

function Message(props: messageDataType) {
    return (
        <>
            <img
                src={'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg'}
                className={style.avatar}/>
            <div className={style.message}>
                <div className={style.textName}>{props.name}</div>
                <div className={style.textMessage}
                >{props.message}
                </div>
                <div className={style.time}>{props.time}</div>
            </div>

            {/*<div>привет*/}
            {/*    <input type={'text'} placeholder={'Ваше сообщение'}/>*/}
            {/*    <button onClick={() => {*/}
            {/*        props.callBack()*/}
            {/*    }}> Отправить*/}
            {/*    </button>*/}
            {/*</div>*/}
        </>

    )
}

export default Message
