import { Search, Notifications, Help, EmojiEmotions, Gif, Image } from '@material-ui/icons'
import React, { useState, useEffect}from 'react';
import ChatMsg from './ChatMsg';
import './Chat.css';
import db, { getUser } from './firebase';
import { collection, limit, orderBy, query, onSnapshot, addDoc, serverTimestamp} from '@firebase/firestore';

export default function Chat({CurrentChannelName}) {

    const [msgs, setMsgs] = useState(null)
    const [typeMsgVal, setMsgVal] = useState('');

    const q = query(
            collection(db, "channels/General 1/Messages")
            , orderBy("createdAt")
            , limit(25)
    );

    const sendMsg = async (e) => {
        e.preventDefault();
        const { uid, photoURL, displayName } = getUser();
        const msgRef = collection(db, "channels", "General 1", "Messages");
        await addDoc(msgRef, {
            user: displayName.split(" ")[0],
            uid,
            photoURL,
            text: typeMsgVal,
            createdAt: serverTimestamp()
        });
        setMsgVal('');
    }

    useEffect(() => {
        onSnapshot(q, (qSnap) => {
            setMsgs(qSnap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })));
        });
    }, [q]);

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

            <div className="chatroom">
                {
                    msgs && msgs.map((msg) => <ChatMsg pfpurl={msg.photoURL} name={msg.user} timestamp={msg.createdAt} text={msg.text} key={msg.id} />)
                }
            </div>
            <div className="chat_footer">
                <form onSubmit={sendMsg}>
                    <input className="msg_input" placeholder="Bruh!" value={typeMsgVal} onChange={(e) => setMsgVal(e.target.value)}/>
                <button type="submit" disabled={!typeMsgVal}>Send msg</button>
                </form>
                <div className="footer_icons">
                    <EmojiEmotions />
                    <Gif />
                    <Image />
                </div>
            </div>
        </div>
    );
}