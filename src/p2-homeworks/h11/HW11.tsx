import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

const onChangeRangeValue1 = (e:number)=>{
    setValue1(e)
}
    const onChangeRangeValue2 = (e:number[])=>{
        setValue2(e[1])
        setValue1(e[0])
    }
    return (
        <div >
            <hr/>
            homeworks 11

            <div style={{width:200,display:'flex'}}>
                <span>{value1}</span>
                <SuperRange onChangeRange={onChangeRangeValue1} value1={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div style={{display:'flex'}}>
                <span>{value1}</span>
                <SuperDoubleRange value={[value1,value2]} onChangeRange={onChangeRangeValue2}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
