export let flagState = {
    flag: false,
    isDarkMode: false,
}

const TOGGLE_THEME = 'TOGGLE_THEME';
export const TOGGLE_BOOLEAN = 'TOGGLE_BOOLEAN';
export const TOGGLE_BOOLEAN_F = 'TOGGLE_BOOLEAN_F';

export const toggleTheme = () => ({
    type: TOGGLE_THEME,
  });

export const toggleBoolean = () => ({
    type: TOGGLE_BOOLEAN,
});

export const toggleBooleanF = () => ({
    type: TOGGLE_BOOLEAN_F
})

export let flagReducer = (state = flagState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
            ...state,
            isDarkMode: !state.isDarkMode,
        };
        case TOGGLE_BOOLEAN: {
            return {...state, flag: true}
        }
        case TOGGLE_BOOLEAN_F: {
            return {...state, flag: false}
        }
        default:
            return state;
    }
}