import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider defaultValue={20}
                min={0}
                max={100}
            sx={{ // стили для слайдера // пишет студент
                mb: 1,color: '#000'

            }}


            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
