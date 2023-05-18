import React from 'react'
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
} from '@mui/material'

const QuestionCheckboxForm = ({ options }) => {
    return (
        <FormGroup>
            {options.map((option, index) => {
                return (
                    <FormControlLabel
                        key={index}
                        control={<Checkbox />}
                        value={option['optionText']}
                        label={option['optionText']}
                    />
                )
            })}
        </FormGroup>
    )
}

export default QuestionCheckboxForm
