import './timer.sass';
import Break from './components/Break/Break'
import Session from './components/Session/Session'
import Controls from './components/Controls/Controls'
import { useStateValue } from './contexts/stateProvider';
import { useClockify } from './hooks/useClockify';

const Timer = () => {

  const [{projectName, timerLabel}] = useStateValue();
  const clockifiedValue = useClockify();

  return (
    <div className="timer">
      <h2 className='timer__maintitle'>{projectName}</h2>
      <h3 id='timer-label' className='timer__label'>{timerLabel}</h3>
      <h1 id='time-left' className='timer__time'>{clockifiedValue}</h1>
      <Controls />
      <div className="timer__controllers">
        <Break />
        <Session />
      </div>
    </div>
  );
}

export default Timer;
