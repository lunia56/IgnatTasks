import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from 'redux';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {themeReducer} from '../../h12/bll/themeReducer';


const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>



export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector
// export const useAppSelector = TypedUseSelectorHook = useSelector()

// @ts-ignore
window.store = store // for dev
