import React from 'react'
import "./SidebarChannel.css";

export default function SidebarChannel({ id, channelName }) {
    return (
        <div className="sidebarChannel">
            <h5>
                <span className="sidebarChannelHash">#</span>
                 {channelName}
            </h5>
        </div>
    )
}
