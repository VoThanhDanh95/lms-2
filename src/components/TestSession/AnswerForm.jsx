import React from 'react'
import JoditExample from '../JoditExample'
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup
} from '@mui/material'

const QuestionCheckboxForm = ({ options }) => {
    function handleChange(e) {
        if (e.target.checked) {
            console.log("checked")
            console.log("handleChange", e.target.value)

        } else {
            console.log("uncheck")
            console.log("handleChange", e.target.value)
        }
    }
    return (
        <FormGroup>
            {options.map((option, index) => {
                return (
                    <FormControlLabel
                        key={index}
                        control={<Checkbox onChange={handleChange} />}
                        value={option['optionText']}
                        label={option['optionText']}
                    />
                )
            })}
        </FormGroup>
    )
}

const QuestionRadioForm = ({ options }) => {
    const [value, setValue] = React.useState('')

    function handleClick(event) {
        if (event.target.value === value) {
            setValue('')
        } else {
            setValue(event.target.value)
        }
    }
    return (
        <RadioGroup value={value}>
            {options.map((option, index) => {
                return (
                    <FormControlLabel
                        key={index}
                        control={<Radio onClick={handleClick} />}
                        value={option['optionText']}
                        label={option['optionText']}
                    />
                )
            })}
        </RadioGroup>
    )
}

const QuestionItem = ({ question }) => {
    const question_answer = () => {
        if (question['questionType'] == 'radio') {
            return <QuestionRadioForm options={question['options']} />
        } else if (question['questionType'] == 'checkbox') {
            return <QuestionCheckboxForm options={question['options']} />
        }
        return <h3>{question['questionType']}</h3>
    }

    return (
        <div className="session-question-wrapper">
            <div className="question-number">{question['qid']}</div>
            <div className="question-content">
                <div className="question-text">
                    {question['questionText'] && (
                        <JoditExample
                            init_value={question['questionText']}
                            custom_config={{
                                readonly: true,
                                toolbar: false,
                                minHeight: 0,
                                style: {
                                    // minHeight: 'none',
                                    // background: '#27272E',
                                    // color: 'rgba(0,0,0,0.5)',
                                    // border: '0px solid red'
                                }
                            }}
                        />
                    )}
                </div>
                <div className="question-answer">{question_answer()}</div>
            </div>
        </div>
    )
}

const AnswerForm = ({ list_question }) => {
    return (
        <ul>
            {list_question.map((question, index) => {
                return (
                    <li key={index}>
                        <QuestionItem question={question} />
                        {/* {question['questionText'].length > 0 && (
                            <JoditExample
                                init_value={question['questionText']}
                                custom_config={{
                                    readonly: true,
                                    toolbar: false
                                }}
                            />
                        )} */}
                    </li>
                )
                // <li
                //     key={index}
                //     ref={(node) => {
                //         // const map = getMap()
                //         if (node) {
                //             itemsRef.current.set(answerBox.id, node)
                //         } else {
                //             itemsRef.current.delete(answerBox.id)
                //         }
                //     }}
                // >
                //     <input style={{ border: '2px solid black' }} />
                // </li>
            })}
        </ul>
    )
}

export default AnswerForm
