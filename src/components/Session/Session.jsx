import './session.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../../contexts/stateProvider';
import { actionTypes } from '../../reducer';

const Session = () => {

    const [{sessionValue, busyIndicator}] = useStateValue();
    const [state, dispatch] = useStateValue();

    const handleDecrement = () => {
        dispatch({
            ...state,
            type: actionTypes.DECREASE_SESSION_VALUE,
            sessionValue: sessionValue - 1,
            timerValue: (sessionValue - 1) * 60
        })
    }
    const handleIncrement = () => {
        dispatch({
            ...state,
            type: actionTypes.INCREASE_SESSION_VALUE,
            sessionValue: sessionValue + 1,
            timerValue: (sessionValue + 1) * 60
        })
    }

    return (
        <div className='session'>
            <span id='session-label' className='session__label'>Session Length</span>
            <div className="session__controls">
                <button
                    type='button'
                    id='session-decrement'
                    className='session__controls--btn'
                    onClick={handleDecrement}
                    disabled={busyIndicator || sessionValue <= 1}
                >
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <p id="session-length" className='session__length'>{sessionValue}</p>
                <button
                    type='button'
                    id='session-increment'
                    className='session__controls--btn'
                    onClick={handleIncrement}
                    disabled={busyIndicator || sessionValue > 59}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )
}

export default Session;
