import React, { useState } from 'react';
import GoBack from '../components/GoBack'
import { logoutNowThunk } from '../redux/auth/actions'
import { useDispatch } from 'react-redux'

export default function AboutUsPage(props) {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutNowThunk());
    }
    const clicked=()=>{
        console.log('clicked')
        setCount(count + 1);
        if(count > 5){
            props.history.push('/secretPage')

        }
    }

    return (
        <div>
            <GoBack />
            <h1>This is an application to help with React-Router-Dom
            </h1>
            <p>Please do not <span onClick={clicked}> Click </span> me</p>
            <button onClick={logout}>Now you can Logout</button>

        </div>
    )
}
