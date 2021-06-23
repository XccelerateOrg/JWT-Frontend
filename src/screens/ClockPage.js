import React, { useState } from 'react';
import Timer from '../components/Timer';
import {Button} from 'reactstrap'
import Clock from '../components/Clock';
import { logoutNowThunk } from '../redux/auth/actions'
import { useDispatch } from 'react-redux'


export default function ClockPage(props) {
  const [numberOfTimers, setNumberOfTimers] = useState(0);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutNowThunk());
  }
  
  const timers = [];
  for (let i = 0; i < numberOfTimers; i++) {
    timers.push(<Timer key={i} />);
  }

  const onAddTimer = () => {
    setNumberOfTimers(numberOfTimers + 1);
  }
  const onClearTimer = () => {
    setNumberOfTimers(0);
  }

  return (
    <div>
      
      <div>
        <Button color="success" onClick={onAddTimer}>Add Timer</Button>
        <Button color="danger" onClick={onClearTimer}>Reset</Button>
        {timers}

        <Clock />
        <button onClick={logout}>Now you can Logout</button>

      </div>
    
    </div>
  );
}
