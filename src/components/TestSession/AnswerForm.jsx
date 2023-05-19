import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateAnswer } from '../../redux/answerSlice'

import JoditExample from '../JoditExample'

import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup
} from '@mui/material'

const QuestionCheckboxForm = ({ question }) => {
    const options = question['options']
    function handleChange(e) {
        if (e.target.checked) {
            console.log('checked')
            console.log('handleChange', e.target.value)
        } else {
            console.log('uncheck')
            console.log('handleChange', e.target.value)
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

const QuestionRadioForm = ({ question }) => {
    const options = question['options']
    const [value, setValue] = React.useState('')
    console.log(question)
    const dispatch = useDispatch()
    const initAnswer = useSelector((state) => state.answer)
    console.log(initAnswer)

    function handleClick(event) {
        if (event.target.value === value) {
            setValue("")
            dispatch(updateAnswer({
                qid: question["startIndex"],
                value: "",
            }))
        } else {
            setValue(event.target.value)
            dispatch(updateAnswer({
                qid: question["startIndex"],
                value: event.target.value,
            }))
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

const QuestionItem = ({ question, itemsRef }) => {
    const handleRef = (node) => {
        console.log('question ', question)
        if (node) {
            for (
                let index = question['startIndex'];
                index < question['startIndex'] + question['numQuestion'];
                index++
            ) {
                console.log('set index ', index)
                itemsRef.current.set(index, node)
            }
        } else {
            for (
                let index = question['startIndex'];
                index < question['startIndex'] + question['numQuestion'];
                index++
            ) {
                itemsRef.current.delete(index)
            }
        }
    }
    function renderSwitch() {
        switch (question['questionType']) {
            case 'description':
                return (
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
                )
            case 'text':
            case 'checkbox':
            case 'radio':
                let num_question = question['numQuestion'] || 1
                console.log('question num question', question['numQuestion'])
                let question_number = `${question['startIndex']}_${
                    question['startIndex'] + question['numQuestion']
                } `

                return (
                    <div className="session-question-wrapper" >
                        <div className="question-number" ref={handleRef}>{question_number}</div>
                        <div className="question-info">
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

                            {/* {if (question['questionType'] == 'radio') {

                            }} */}
                            {question['questionType'] == 'radio' ? (
                                <QuestionRadioForm
                                    question={question}
                                    // options={question['options']}
                                />
                            ) : question['questionType'] == 'checkbox' ? (
                                <QuestionCheckboxForm
                                    question={question}
                                    // options={question['options']}
                                />
                            ) : (
                                <div> {question['questionType']} </div>
                            )}
                        </div>
                    </div>
                )
        }
    }

    return <>{renderSwitch()}</>

    // let comp = switch(question["questionType"]) {
    //     case "description":
    //         return <></>

    // }

    // const question_answer = () => {
    //     if (question['questionType'] == 'radio') {
    //         return <QuestionRadioForm options={question['options']} />
    //     } else if (question['questionType'] == 'checkbox') {
    //         return <QuestionCheckboxForm options={question['options']} />
    //     }
    //     return <h3>{question['questionType']}</h3>
    // }

    // const setRef = (node) => {
    //     if (node) {
    //         for (let index = question["startIndex"]; index < array.length; index++) {
    //             const element = array[index];

    //         }
    //         itemsRef.current.set(answerBox.id, node)
    //     } else {
    //         itemsRef.current.delete(answerBox.id)
    //     }
    // }

    // return (
    //     <div className="session-question-wrapper"
    //         ref={setRef}
    //     >
    //         <div className="question-number">{question['qid']}</div>
    //         <div className="question-content">
    //             <div className="question-text">
    //                 {question['questionText'] && (
    //                     <JoditExample
    //                         init_value={question['questionText']}
    //                         custom_config={{
    //                             readonly: true,
    //                             toolbar: false,
    //                             minHeight: 0,
    //                             style: {
    //                                 // minHeight: 'none',
    //                                 // background: '#27272E',
    //                                 // color: 'rgba(0,0,0,0.5)',
    //                                 // border: '0px solid red'
    //                             }
    //                         }}
    //                     />
    //                 )}
    //             </div>
    //             <div className="question-answer">{question_answer()}</div>
    //         </div>
    //     </div>
    // )
}

const AnswerForm = ({ itemsRef, list_question }) => {
    return (
        <ul>
            {list_question.map((question, index) => {
                return (
                    <li key={index}>
                        <QuestionItem question={question} itemsRef={itemsRef} />
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
