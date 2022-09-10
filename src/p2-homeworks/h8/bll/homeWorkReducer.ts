import {initialPeopleType} from '../HW8';

type sortUpActionType = {
    type: 'sort', payload: 'up'
}
type sortDownActionType = {
    type: 'sort', payload: 'down'
}
type check18ActionType = {
    type: 'check', payload: 18
}
export type ActionType = sortUpActionType | sortDownActionType | check18ActionType
export const homeWorkReducer = (state: initialPeopleType, action: ActionType): initialPeopleType => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            } else if (action.payload === 'down') {
                return [...state].sort((a, b) => a.name < b.name ? 1 : -1)
            }
            return state
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}
export const sortUpAC = (): sortUpActionType => ({type: 'sort', payload: 'up'})

export const sortDownAC = (): sortDownActionType => ({type: 'sort', payload: 'down'})

export const check18AC = (): check18ActionType => ({type: 'check', payload: 18})