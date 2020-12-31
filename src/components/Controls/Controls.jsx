import './controls.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'

const Controls = () => {
    return (
        <div className='controls__wrp'>
            <button type='button' id='start_stop'>
                <FontAwesomeIcon icon={faPlay} />
                <FontAwesomeIcon icon={faPause} style={{display: 'none'}}/>
            </button>
            <button type='button' id='reset'>
                <FontAwesomeIcon icon={faRedo} />
            </button>
        </div>
    )
}

export default Controls;
