import './timer.sass';
import Break from './components/Break/Break'
import Session from './components/Session/Session'
import Controls from './components/Controls/Controls'

const Timer = () => {
  return (
    <div className="timer">
      <h2>React Pomodoro Timer</h2>
      <h3 id='timer-label' className='timer__label'>Session</h3>
      <h1 id='time-left' className='timer__time'>25:00</h1>
      <Controls />
      <div className="timer__controllers">
        <Break />
        <Session />
      </div>
    </div>
  );
}

export default Timer;
