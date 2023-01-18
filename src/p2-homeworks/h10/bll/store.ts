import {loadingReducer} from './loadingReducer'
import {combineReducers,  legacy_createStore} from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'


const reducers = combineReducers({
    loading: loadingReducer,
})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>
// export const useAppSelector = TypedUseSelectorHook = useSelector()

// @ts-ignore
window.store = store // for dev
