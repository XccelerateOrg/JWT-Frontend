import * as React from 'react';
import GoBack from '../components/GoBack'
import { logoutNowThunk } from '../redux/auth/actions'
import { useDispatch } from 'react-redux'


export default function NoMatch() {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutNowThunk());
    };

    return (
        <div>
            <GoBack />
            <h1>No Page found, 404 error, please get better at coding...</h1>
            <button onClick={logout}>Now you can Logout</button>

        </div>
    )
}