import React from "react";
import s from "./HW12.module.css";
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../h10/bll/store';
import {changeThemeAC} from './bll/themeReducer';

const themes = ['light', 'dark', 'blue'];

function HW12() {
    const theme = useAppSelector(state => state.theme.theme); // useSelector
    console.log(theme)
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeAC(theme))
    }
    return (

        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div className={s[theme + '-text']}>Выберете тему</div> <br/>
            <SuperSelect options={themes}
                         value={theme}
                         onChangeOption={onChangeCallback}/>

        </div>
    );
}

export default HW12;
