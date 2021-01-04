import './controls.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../../stateProvider';
import { actionTypes } from '../../reducer';

const Controls = () => {

    const [{busyIndicator}] = useStateValue();
    const [state, dispatch] = useStateValue();
    
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
