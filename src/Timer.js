import './timer.sass';
import Break from './components/Break/Break'
import Session from './components/Session/Session'
import Controls from './components/Controls/Controls'
import { useStateValue } from './stateProvider';

const Timer = () => {

  const handleReset = (e) => {
    console.log(e.target)
  }

  const [{projectName, timerLabel}] = useStateValue();

  return (
    <div className="timer">
      <h2 className='timer__maintitle'>{projectName}</h2>
      <h3 id='timer-label' className='timer__label'>{timerLabel}</h3>
      <h1 id='time-left' className='timer__time'>25:00</h1>
      <Controls onReset={(e) => handleReset(e)} />
      <div className="timer__controllers">
        <Break />
        <Session />
      </div>
    </div>
  );
}

export default Timer;
