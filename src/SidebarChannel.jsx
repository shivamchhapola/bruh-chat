import React from 'react'
import "./SidebarChannel.css";
import { signOutApp } from './firebase';

export default function SidebarChannel({ id, channelName }) {
    return (
        <div className="sidebarChannel">
            <h5>
                <span className="sidebarChannelHash">#</span>
                <button onClick={() => {
                    signOutApp();
                }}> {channelName} </button>
            </h5>
        </div>
    )
}
