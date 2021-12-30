import { Search, Notifications, Help, EmojiEmotions, Gif, Image } from '@material-ui/icons'
import React from 'react';
import ChatMsg from './ChatMsg';
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

            <div className="chatroom">
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Bruh" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name="Shivam" timestamp="69/69/69" text="Does multiline text works bruh bradgkjashdkhfdksadhgfkashfdklahflksasdasdaasdfasfa sadfasdffasdfas dfsa gkgsadjfgasjdfsdfvjhasdgf jsagdf sagdjf hsadgj fasf hgsdf sgdfh asdg jhasdh jdvsj dfj sa" />
                <ChatMsg pfpurl = "https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" name = "Shivam" timestamp="69/69/69" text = "yes it does" />
            </div>


            <div className="chat_footer">
                <input className="msg_input" placeholder="Type Message here" />
                <div className="footer_icons">
                    <EmojiEmotions />
                    <Gif />
                    <Image />
                </div>
            </div>


        </div>
    );
}
