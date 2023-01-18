export type initialStateType = {
    isLoading:boolean
}
const initState:initialStateType = {
    isLoading:false
}

export const loadingReducer = (state = initState, action: loadingAT): initialStateType => {
    switch (action.type) {
        case 'TOGGLE_LOADING': {
            return {...state,isLoading:!state.isLoading}
        }
        default:
            return state
    }
}

export type loadingAT = ReturnType<typeof loadingAC>
export const loadingAC = () => ({type: 'TOGGLE_LOADING'} as const)