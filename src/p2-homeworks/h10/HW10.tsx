import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import preloader from './preloader1.gif'

function HW10() {
    const Loading = useSelector<AppStoreType>(state => state.loading.isLoading)
    console.log(Loading)
    const dispatch = useDispatch()
    // const loading = false

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(()=>{
            dispatch(loadingAC())
        },5000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {Loading
                ? (
                    <div><img src={preloader} alt="не подгрузилась" style={{width:100,height:100}}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
