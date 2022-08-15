import React, {ChangeEvent, useState} from 'react'
import Message, {messageDataType} from './Message';
import style from './Message.module.css';


function HW1() {
    let [messageUser, setMessageUser] = useState<messageDataType[]>([
        {
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Micola',
            message: 'Привет! Напиши мне сообщение! =) ',
            time: new Date().toLocaleTimeString(),
        }]
    )

    const [t, setT] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setT(e.currentTarget.value)
    }

    const onClickHandler = () => {
        setMessageUser([
            ...messageUser,
            {
                avatar: messageUser[0].avatar,
                name: messageUser[0].name,
                message: t,
                time: new Date().toLocaleTimeString()
            }])
        setT('')
    }


    return (
        <>
            <hr/>
            {/*homeworks 1*/}
            <div style={{maxWidth: 900}}>
                {messageUser.map((m, i) => {
                    return (
                        <div className={style.messageContainer}
                             key={i}>
                            <Message
                                key={i}
                                avatar={m.avatar}
                                name={m.name}
                                message={m.message}
                                time={m.time}
                            />
                        </div>
                    )
                })}

            </div>
            <div className={style.input}>
                <textarea className={style.textarea}
                          value={t}
                          onChange={onChangeHandler}/>
                <button className={style.button}
                        onClick={onClickHandler}>Send
                </button>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </>
    )
}

export default HW1
