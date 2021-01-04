import './controls.sass'
import { useEffect } from 'react';
import { useClockify } from '../../hooks/useClockify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../../stateProvider';
import { actionTypes } from '../../reducer';

const Controls = () => {

    const [{projectName, timerValue, breakValue, busyIndicator}] = useStateValue();
    const [state, dispatch] = useStateValue();
    // Custom Hook
    const clockifiedValue = useClockify();
    
    const handleReset = () => {
        dispatch({
            ...state,
            type: actionTypes.RESET_TIMERS
        })
    }

    const handlePlayPause = () => {
        dispatch({
            ...state,
            type: actionTypes.TOGGLE_ISBUSY_INDICATOR,
            busyIndicator: !state.busyIndicator
        })
    }

    const handleCount = () => {
        if (timerValue >= 0) {
            dispatch({
                ...state,
                type: actionTypes.START_TIMER,
                timerValue: timerValue - 1
            })
        } else if (timerValue < 0) {
            dispatch({
                ...state,
                type: actionTypes.TOGGLE_TIMER_LABEL,
                timerLabel: 'Break'
            })
            dispatch({
                ...state,
                type: actionTypes.START_TIMER,
                timerValue: (breakValue * 60) - 1
            })
        }
    }
    
    useEffect(() => {
        if (busyIndicator) {
            let timerInterval = setInterval(() => {
                handleCount();
                document.title = `[${clockifiedValue}]`
            }, 1000);
            // Clear interval if the component is unmounted
            return () => clearInterval(timerInterval);
        } else document.title = projectName;
    })

    return (
        <div className='controls__wrp'>
            <button type='button' id='start_stop' onClick={handlePlayPause}>
                <FontAwesomeIcon
                    icon={!busyIndicator ? faPlay : faPause}
                />
            </button>
            <button type='button' id='reset' onClick={handleReset}>
                <FontAwesomeIcon
                    icon={faRedo}
                />
            </button>
        </div>
    )
}

export default Controls;
