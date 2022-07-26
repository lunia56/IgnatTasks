import React, {useState} from 'react'
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


    return (
        <div className={style.container}>
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
                <textarea className={style.textarea} value={t} onChange={event => setT(event.currentTarget.value)}/>
                <button className={style.button}
                        onClick={() => {
                            setMessageUser([
                                ...messageUser,
                                {
                                    avatar: messageUser[0].avatar,
                                    name: messageUser[0].name,
                                    message: t,
                                    time: messageUser[0].time
                                }])
                            setT('')
                        }}>Send
                </button>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
