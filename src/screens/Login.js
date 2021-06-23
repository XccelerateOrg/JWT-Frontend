import React, { useState, useEffect, } from 'react';
import { useSelector, useDispatch, } from 'react-redux'
import {loginUserThunk, loginFacebookThunk} from '../redux/auth/actions'
import FacebookLogin from 'react-facebook-login'

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useSelector(state => state.auth);
    const { isAuthenticated: isAuthenticatedMSP } = auth;

    const dispatch = useDispatch();

    const login = () => {
        dispatch(loginUserThunk(email, password))
    };
    const responseFacebook = (userInfo) => {
        if (userInfo.accessToken) {
            dispatch(loginFacebookThunk(userInfo.accessToken));
        }
        return null;
    };

    useEffect(() => {
        if(isAuthenticatedMSP === true){
            props.history.push('/shoppingList')
        }
    }, [isAuthenticatedMSP]);

    const componentClick = () => {
        return null;
    };

    return (
        <div>
            Username:
            <input onChange={(e) => setEmail(e.currentTarget.value)} type="text" value={email} /> 
            <br />
            Password:
            <input onChange={(e) => setPassword(e.currentTarget.value)} type="text" value={password} /> 
            <br />

            <button onClick={login}>Login</button>

            <br />
            <FacebookLogin  
            appId ={process.env.REACT_APP_FACEBOOK_APP_ID || ''}
                autoLoad={false}
                fields="name,email,picture"
                onClick={componentClick}
                callback={responseFacebook}/>

        </div>
    )
}
