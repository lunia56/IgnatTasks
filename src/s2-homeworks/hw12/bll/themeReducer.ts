type initStateType={
    themeId:number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state:initStateType = initState, action: ReturnType<typeof changeThemeId>): initStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {...state, themeId:action.id}
        }
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
