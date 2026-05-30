import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth.js';
import { logout } from '../../store/authSlice.js';

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logOut().then(() => {
            dispatch(logOut())
        });
    }
    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Log Out</button>
    )
}

export default LogoutBtn
