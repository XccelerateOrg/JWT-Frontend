import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getInfoThunk } from '../redux/information/actions'
import { logoutNowThunk } from '../redux/auth/actions'


export default function InfoPage() {
    const info = useSelector(state => state.info);
    const { information: informationMSP } = info;
    const dispatch = useDispatch();
    const getData = () => {
        dispatch(getInfoThunk());
    }
    const logout = () => {
        dispatch(logoutNowThunk());
    }

    return (
        <div>
            <button onClick={logout}>Now you can Logout</button>

            <button onClick={getData}>Get information from backend!</button>

            {informationMSP.map((info, index) => {
                return (
                    <div key={index}>
                        <h3>{info.title}</h3>
                        <p>{info.content}</p>
                    </div>
                )
            })}

        </div>
    )
}
