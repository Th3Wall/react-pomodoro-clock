import './break.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const Break = () => {
    return (
        <div className='break'>
            <span id='break-label' className='break__label'>Break Length</span>
            <p id="break-length" className='break__length'>5</p>
            <div className="break__controls">
                <button type='button' id='break-decrement' className='break__controls--btn'>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <button type='button' id='break-increment' className='break__controls--btn'>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )
}

export default Break;
