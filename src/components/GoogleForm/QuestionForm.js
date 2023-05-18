import { useState } from "react"
import QuestionItem from "./QuestionItem"

import './googleForm.scss'
import ActionControl from "./ActionControl"
import JoditExample from "../JoditExample"
import { SECTION_LIST } from './fakeData'
const QUESTIONS = SECTION_LIST[0]

function QuestionForm() {
    const [questionStickyLeft, setQuestionStickyLeft] = useState(QUESTIONS["content"])
    const [questions, setQuestions] = useState(QUESTIONS["question-list"])

    const onChangeStickyQuestion = (text_value) => {
        console.log(text_value)
        setQuestionStickyLeft(text_value)
    }

    const onAddOption = (question_idx) => {
        let newOptions = [...questions[question_idx]["options"]];
        newOptions = [...newOptions, {
            "optionText": "New Option"
        }]
        const newQuestions = [...questions]
        newQuestions[question_idx]['options'] = newOptions
        setQuestions(newQuestions)
    }

    const onAddQuestion = (question_idx) => {
        const newQuestions = [...questions, {
            "questionText": "New Question",
            "questionType": "radio",
            "options": [
            ],
            "open": true,
            "required": false
        }]
        setQuestions(newQuestions)
    }

    const onDeleteOption = (question_idx, option_idx) => {
        let newOptions = [...questions[question_idx]["options"]];
        newOptions = newOptions.filter((item, idx) => idx !== option_idx)
        const newQuestions = [...questions]
        newQuestions[question_idx]['options'] = newOptions
        setQuestions(newQuestions)
    }

    const onChangeOption = (question_idx, option_idx, value) => {
        const newQuestions = questions.map((question, qid) => {
            if (qid == question_idx) {
                const updated_question = {
                    ...question,
                }
                updated_question['options'][option_idx]['questionText'] = value
                return updated_question
            } else {
                return question
            }
        })
        setQuestions(newQuestions)
    }

    const onChangeAnswer = (question_idx, option_idx) => {
        const newQuestions = questions.map((question, qid) => {
            if (qid == question_idx) {
                const updated_question = {
                    ...question,
                }
                const current_is_correct = updated_question['options'][option_idx]['isCorrect']
                if (current_is_correct) {
                    updated_question['options'][option_idx]['isCorrect'] = false
                } else {
                    updated_question['options'][option_idx]['isCorrect'] = true
                }
                return updated_question
            } else {
                return question
            }
        })
        setQuestions(newQuestions)
    }

    const onChangeQuestion = (question_idx, text_value) => {
        const newQuestions = questions.map((question, qid) => {
            if (qid == question_idx) {
                const updated_question = {
                    ...question,
                    questionText: text_value
                }
                return updated_question
            } else {
                return question
            }
        })
        setQuestions(newQuestions)
    }

    const onChangeQuestionType = (question_idx, text_value) => {
        const newQuestions = questions.map((question, qid) => {
            if (qid == question_idx) {
                const updated_question = {
                    ...question,
                    questionType: text_value
                }
                return updated_question
            } else {
                return question
            }
        })
        setQuestions(newQuestions)
    }

    return (
        <>
            <div className="question-wrapper">
                <div className="question-sticky-left">
                    <h2>
                        Sticky Left Question
                    </h2>
                    <JoditExample
                        init_value={questionStickyLeft}
                        placeholder='Sticky left'
                        custom_config={{ readonly: false }}
                        handleOnBlur={onChangeStickyQuestion}
                    />
                </div>

                {questions.map(
                    (question, idx) => {
                        return (
                            <QuestionItem
                                key={idx}
                                question={question}
                                question_id={idx}
                                onChangeQuestion={onChangeQuestion}
                                onChangeQuestionType={onChangeQuestionType}
                                onChangeOption={onChangeOption}
                                onChangeAnswer={onChangeAnswer}
                                onDeleteOption={onDeleteOption}
                                onAddOption={(e) => onAddOption(idx)}
                            />)
                    }
                )}
            </div>

            <ActionControl onAddQuestion={onAddQuestion} />
        </>
    )


}

export default QuestionForm