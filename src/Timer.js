import './timer.sass';
import Break from './components/Break/Break'
import Session from './components/Session/Session'
import Controls from './components/Controls/Controls'
import { useStateValue } from './stateProvider';
import { actionTypes } from './reducer';

const Timer = () => {

  const [{projectName, timerLabel, timerValue}] = useStateValue();
  const [state, dispatch] = useStateValue();

  const handleReset = () => {
    dispatch({
      type: actionTypes.RESET_TIMERS
    })
  }

  const clockify = () => {
    let minutes = Math.floor(timerValue / 60);
    let seconds = timerValue - (minutes * 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${minutes}:${seconds}`;
  }

  return (
    <div className="timer">
      <h2 className='timer__maintitle'>{projectName}</h2>
      <h3 id='timer-label' className='timer__label'>{timerLabel}</h3>
      <h1 id='time-left' className='timer__time'>{clockify()}</h1>
      <Controls onReset={handleReset} />
      <div className="timer__controllers">
        <Break />
        <Session />
      </div>
    </div>
  );
}

export default Timer;
