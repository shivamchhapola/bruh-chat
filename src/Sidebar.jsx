import React from 'react';
import { Add, ExpandMore, Headset, PowerOff, Settings } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import SidebarChannel from './SidebarChannel';
import './Sidebar.css';
import { signOutApp } from './firebase';

export default function Sidebar({user}) {
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
                    <SidebarChannel channelName="General 1"/>
                </div>
            </div>
            <div className="sidebar_bottom">
                <div className="sidebar_profile">
                    <Avatar src={user.photoURL}/>
                    <div className="sidebar_profileName">
                        <h5>{user.displayName.split(" ")[0]}</h5>
                        <h6>#{user.uid.substring(0, 8)}</h6>
                    </div>
                </div>
                <div className="sidebar_bottIcons">
                    <Settings />
                    <Headset />
                    <PowerOff onClick={signOutApp}/>
                </div>
            </div>
        </div>
    );
}
