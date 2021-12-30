import { Search, Notifications, Help } from '@material-ui/icons'
import React from 'react';
import './Chat.css';

export default function Chat({CurrentChannelName}) {
    return (
        <div className='chat_main'>
            <div className="chat_header">
                <div className="chat_header_channelName">
                    <h3><span>#</span>
                    {CurrentChannelName}</h3>
                </div>
                <div className="chat_header_other">
                    <input type="text"/>
                    <Search style={{transform: "scale(0.7)"}}/>
                    <Notifications />
                    <Help />
                </div>
            </div>
            <div className="chatroom">This is chat room</div>
            <div className="chat_footer">This is footer</div>
        </div>
    );
}
