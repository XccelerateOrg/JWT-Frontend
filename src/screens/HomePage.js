import * as React from 'react';
import GoBack from '../components/GoBack'
import { logoutNowThunk } from '../redux/auth/actions'
import { useDispatch } from 'react-redux'


export default function HomePage() {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutNowThunk());
    }
    
    return (
        <div>
            <GoBack />
            <h1>Welcome to the page, this is our home.</h1>
            <button onClick={logout}>Now you can Logout</button>

        </div>
    )
};