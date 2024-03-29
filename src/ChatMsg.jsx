import { Avatar } from '@material-ui/core'
import React from 'react'
import './ChatMsg.css'

export default function ChatMsg({text, pfpurl, timestamp, name}) {
    return (
        <div className="chat_msg">
            <Avatar src={pfpurl} referrerPolicy="no-referrer"/>
            <div className="msg_body">
                <div className="msg_info">
                    <div className="msg_name">
                        {name}
                    </div>
                    <div className="msg_time">
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </div>
                </div>
                <p className="msg_txt">{text}</p>
            </div>
        </div>
    )
}
