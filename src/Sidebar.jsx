import React from 'react';
import { Add, ExpandMore, Headset, Mic, Settings } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

import SidebarChannel from './SidebarChannel';
import './Sidebar.css';

export default function Sidebar() {
    return (
        <div className='sidebar_main'>
            <div className="sidebar_top">
                <h3>Bruh Chat</h3>
                <ExpandMore />
            </div>
            <div className="sidebar_middle">
                <div className="sidebar_channelsheader">
                    <div className="sidebar_header">
                        <ExpandMore />
                        <h4>General Channels</h4>
                    </div>
                    <Add className = "sidebar_addchannel" />
                </div>
                <div className="sidebar_channels">
                    <SidebarChannel channelName = "General 1"/>
                </div>
            </div>
            <div className="sidebar_bottom">
                <div className="sidebar_profile">
                    <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GjQtTw06FhutGLuLcj3nBtjyVG8eNSelgzfxL086A=s288-p-rw-no" />
                    <div className="sidebar_profileName">
                        <h5>Shivam</h5>
                        <h6>@shivam</h6>
                    </div>
                </div>
                <div className="sidebar_bottIcons">
                    <Mic />
                    <Headset />
                    <Settings />
                </div>
            </div>
        </div>
    );
}
