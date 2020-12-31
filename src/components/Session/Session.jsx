import './session.sass'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const Session = () => {

    const [value, setValue] = useState(25);
    const handleDecrement = () => { setValue(value - 1) }
    const handleIncrement = () => { setValue(value + 1) }

    return (
        <div className='session'>
            <span id='session-label' className='session__label'>Session Length</span>
            <div className="session__controls">
                <button
                    type='button'
                    id='session-decrement'
                    className='session__controls--btn'
                    onClick={handleDecrement}
                    disabled={value <= 1}
                >
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <p id="session-length" className='session__length'>{value}</p>
                <button
                    type='button'
                    id='session-increment'
                    className='session__controls--btn'
                    onClick={handleIncrement}
                    disabled={value > 59}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )
}

export default Session;
