import './break.sass'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const Break = () => {

    const [value, setValue] = useState(5);
    const handleDecrement = () => { setValue(value - 1) }
    const handleIncrement = () => { setValue(value + 1) }

    return (
        <div className='break'>
            <span id='break-label' className='break__label'>Break Length</span>
            <div className="break__controls">
                <button
                    type='button'
                    id='break-decrement'
                    className='break__controls--btn'
                    onClick={handleDecrement}
                    disabled={value <= 0}
                >
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <p id="break-length" className='break__length'>{value}</p>
                <button
                    type='button'
                    id='break-increment'
                    className='break__controls--btn'
                    onClick={handleIncrement}
                    disabled={value > 59}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )
}

export default Break;
