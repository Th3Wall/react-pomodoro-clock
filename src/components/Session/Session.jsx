import './session.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../../stateProvider';
import { actionTypes } from '../../reducer';

const Session = () => {

    const [{sessionValue}] = useStateValue();
    const [state, dispatch] = useStateValue();

    const handleDecrement = () => {
        dispatch({
            type: actionTypes.DECREASE_SESSION_VALUE,
            sessionValue: sessionValue - 1
        })
    }
    const handleIncrement = () => {
        dispatch({
            type: actionTypes.INCREASE_SESSION_VALUE,
            sessionValue: sessionValue + 1
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
                    disabled={sessionValue <= 1}
                >
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <p id="session-length" className='session__length'>{sessionValue}</p>
                <button
                    type='button'
                    id='session-increment'
                    className='session__controls--btn'
                    onClick={handleIncrement}
                    disabled={sessionValue > 59}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )
}

export default Session;
