import * as React from 'react';
import Questioner from '../components/Questioner'
import GoBack from '../components/GoBack'
import { logoutNowThunk } from '../redux/auth/actions'
import { useDispatch } from 'react-redux'


export default function QuestionerPage() {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutNowThunk());
    };

    return (
        <div>
            <GoBack />
            <Questioner question="What is your favourite colour?" />
            <button onClick={logout}>Now you can Logout</button>
        </div>
    )
}
