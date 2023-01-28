
// type themeType = 'light'|'blue'|'dark'

type initStateType = {
    theme:string
}
const initState = {
    theme: 'light'
};

export const themeReducer = (state = initState, action: changeThemeACType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};
type changeThemeACType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (theme: string) => ({type: 'CHANGE_THEME',theme} as const); // fix any