import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, useState} from 'react'
import {ArrType} from '../../HW7';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: ArrType
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value);
        onChange && onChange(e)

        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => {

            return (
                <label key={name + '-' + i}>
                    <input
                        type={'radio'}
                        name={name}
                        value={o}
                        onChange={onChangeCallback}
                        checked={value === o}
                        // name, checked, value, onChange
                    />
                    {o}
                </label>
            )
        }) :
        []


    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
