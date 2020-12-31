import './session.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const Session = () => {
    return (
        <div className='session'>
            <span id='session-label' className='session__label'>Session Length</span>
            <p id="session-length" className='session__length'>25</p>
            <div className="session__controls">
                <button type='button' id='session-decrement' className='session__controls--btn'>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <button type='button' id='session-increment' className='session__controls--btn'>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )
}

export default Session;
