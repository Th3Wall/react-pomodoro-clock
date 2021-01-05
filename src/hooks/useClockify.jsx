import { useStateValue } from '../contexts/stateProvider';

export function useClockify() {
    const [{timerValue}] = useStateValue();

    let minutes = Math.floor(timerValue / 60);
    let seconds = timerValue - (minutes * 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${minutes}:${seconds}`;
}