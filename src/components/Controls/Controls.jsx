import './controls.sass'
import { useEffect, useRef } from 'react';
import { useClockify } from '../../hooks/useClockify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../../contexts/stateProvider';
import { actionTypes } from '../../reducer';

const Controls = () => {

    const [{projectName, timerValue, breakValue, sessionValue, timerLabel, busyIndicator}] = useStateValue();
    const [state, dispatch] = useStateValue();
    // Custom Hook
    const clockifiedValue = useClockify();
    const bellSoundUrl = "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3";
    const audioSoundRef = useRef();
    
    const handleReset = () => {
        dispatch({
            ...state,
            type: actionTypes.RESET_TIMERS
        })
        audioSoundRef.current.pause();
        audioSoundRef.current.time = 0;
    }

    const handlePlayPause = () => {
        dispatch({
            ...state,
            type: actionTypes.TOGGLE_ISBUSY_INDICATOR,
            busyIndicator: !state.busyIndicator
        })
    }

    const handleCount = () => {
        dispatch({
            ...state,
            type: actionTypes.START_TIMER,
            timerValue: timerValue - 1
        })
        if (timerValue === 0) audioSoundRef.current.play();
        if (timerValue < 0) {
            if (timerLabel === 'Session') {
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
            } else {
                dispatch({
                    ...state,
                    type: actionTypes.TOGGLE_TIMER_LABEL,
                    timerLabel: 'Session'
                })
                dispatch({
                    ...state,
                    type: actionTypes.START_TIMER,
                    timerValue: (sessionValue * 60) - 1
                })
            }
        }
    }
    
    useEffect(() => {
        if (busyIndicator) {
            let timerInterval = setInterval(() => {
                handleCount();
                document.title = `[${timerLabel}] - ${clockifiedValue}`
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
            <audio id="beep" src={bellSoundUrl} ref={audioSoundRef} preload='auto' />
        </div>
    )
}

export default Controls;
