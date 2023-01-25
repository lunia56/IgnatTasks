import React from 'react'
import {Slider} from 'antd';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
    }
) => {

    const onChangeCallback = (e:[number,number]) => {
        onChangeRange && onChangeRange(e)
    }

    return (
        <div style={{minWidth:200, marginLeft: 10, marginRight:10}}>
            <Slider range defaultValue={value}  onChange={onChangeCallback} value={value}/>
        </div>
    )
}

export default SuperDoubleRange
