export const initialState = {
    projectName: 'React Pomodoro Timer',
    githubUsername: 'Th3Wall',
    githubProfileUrl: 'https://github.com/Th3Wall',
    timerLabel: 'Session',
    busyIndicator: false,
    breakValue: 5,
    sessionValue: 25,
    // timerValue is the initial value of 25 minnutes multiplied by 60 in order to have it in seconds much more easily decreasable by 1
    timerValue: 1500
}

export const actionTypes = {
    SET_PROJECTNAME: 'SET_PROJECTNAME',
    RESET_TIMERS: 'RESET_TIMERS',
    START_TIMER: 'START_TIMER',
    TOGGLE_TIMER_LABEL: 'TOGGLE_TIMER_LABEL',
    TOGGLE_ISBUSY_INDICATOR: 'TOGGLE_ISBUSY_INDICATOR',
    INCREASE_BREAK_VALUE: 'INCREASE_BREAK_VALUE',
    DECREASE_BREAK_VALUE: 'DECREASE_BREAK_VALUE',
    INCREASE_SESSION_VALUE: 'INCREASE_SESSION_VALUE',
    DECREASE_SESSION_VALUE: 'DECREASE_SESSION_VALUE'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PROJECTNAME:
            return {
                ...state,
                projectName: action.projectName,
                timerLabel: action.timerLabel
            };
        case actionTypes.INCREASE_BREAK_VALUE:
            return {
                ...state,
                breakValue: action.breakValue
            };
        case actionTypes.DECREASE_BREAK_VALUE:
            return {
                ...state,
                breakValue: action.breakValue
            };
        case actionTypes.INCREASE_SESSION_VALUE:
            return {
                ...state,
                sessionValue: action.sessionValue,
                timerValue: action.timerValue
            };
        case actionTypes.DECREASE_SESSION_VALUE:
            return {
                ...state,
                sessionValue: action.sessionValue,
                timerValue: action.timerValue
            };
        case actionTypes.TOGGLE_ISBUSY_INDICATOR:
            return {
                ...state,
                busyIndicator: action.busyIndicator
            };
        case actionTypes.TOGGLE_TIMER_LABEL:
            return {
                ...state,
                timerLabel: action.timerLabel
            };
        case actionTypes.START_TIMER:
            return {
                ...state,
                timerValue: action.timerValue
            };
        case actionTypes.RESET_TIMERS:
            return initialState;
        default:
            return state;
    }
}

export default reducer;