import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

export type ArrType = string[]
const arr: ArrType = ['x', 'y', 'z', 'y', 'g']

function HW7() {
    const [value, onChangeOption] = useState<string>(arr[1])

    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
