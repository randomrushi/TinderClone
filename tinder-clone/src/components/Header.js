import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import {IconButton} from "@mui/material";
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header_icon'/>
            </IconButton>
            <img
                className='header_logo'
                src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-1536x864.png'
                alt='tinder-logo'
            />
            <IconButton>
                <ForumIcon fontSize='large' className='header_icon'/>
            </IconButton>
        </div>
    );
}

export default Header;