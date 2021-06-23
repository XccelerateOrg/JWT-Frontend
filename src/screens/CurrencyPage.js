import * as React from 'react';
import CurrencyConverter from '../components/CurrencyConverter'
import GoBack from '../components/GoBack'
import { logoutNowThunk } from '../redux/auth/actions'
import { useDispatch } from 'react-redux'


export default function CurrencyPage() {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutNowThunk());
    };
     
    return (
        <div>
            <GoBack />
<CurrencyConverter/>            
<button onClick={logout}>Now you can Logout</button>

</div>
    )
};