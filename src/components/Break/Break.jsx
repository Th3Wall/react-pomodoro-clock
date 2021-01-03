import './break.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../../stateProvider'
import { actionTypes } from '../../reducer'

const Break = () => {

    const [{breakValue}] = useStateValue();
    const [state, dispatch] = useStateValue();

    const handleDecrement = () => {
        dispatch({
            type: actionTypes.DECREASE_BREAK_VALUE,
            breakValue: breakValue - 1
        })
    }
    const handleIncrement = () => {
        dispatch({
            type: actionTypes.INCREASE_BREAK_VALUE,
            breakValue: breakValue + 1
        })
    }

    return (
        <div className='break'>
            <span id='break-label' className='break__label'>Break Length</span>
            <div className="break__controls">
                <button
                    type='button'
                    id='break-decrement'
                    className='break__controls--btn'
                    onClick={handleDecrement}
                    disabled={breakValue <= 0}
                >
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <p id="break-length" className='break__length'>{breakValue}</p>
                <button
                    type='button'
                    id='break-increment'
                    className='break__controls--btn'
                    onClick={handleIncrement}
                    disabled={breakValue > 59}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )
}

export default Break;
