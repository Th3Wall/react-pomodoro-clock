export const initialState = {
    projectName: 'React Pomodoro Timer',
    timerLabel: 'Session',
    breakValue: 5,
    sessionValue: 25
}

export const actionTypes = {
    SET_PROJECTNAME: 'SET_PROJECTNAME',
    RESET_TIMERS: 'RESET_TIMERS',
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
                sessionValue: action.sessionValue
            };
        case actionTypes.DECREASE_SESSION_VALUE:
            return {
                ...state,
                sessionValue: action.sessionValue
            };
        default:
            return state;
    }
}

export default reducer;