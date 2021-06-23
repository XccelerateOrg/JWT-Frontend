import * as React from 'react';
import LeaderBoard from '../components/LeaderBoard'
import GoBack from '../components/GoBack'
import { logoutNowThunk } from '../redux/auth/actions'
import { useDispatch } from 'react-redux'


export default function LeaderBoardPage() {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutNowThunk());
    };

    return (
        <div>
            <GoBack />
            <LeaderBoard />
            <button onClick={logout}>Now you can Logout</button>

        </div>
    )
}
