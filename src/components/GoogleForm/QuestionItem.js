import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import SubjectIcon from '@mui/icons-material/Subject';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CloseIcon from '@mui/icons-material/Close';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button, IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import ContentCopySharpIcon from '@mui/icons-material/ContentCopySharp';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CheckOutlined } from '@mui/icons-material';
import JoditExample from '../JoditExample';
import QuestionCheckboxForm from '../FormBody/QuestionCheckboxForm';

function QuestionItem({ question,
    question_id,
    onAddOption,
    onChangeQuestion,
    onChangeQuestionType,
    onChangeOption,
    onChangeAnswer,
    onDeleteOption
}) {

    // const onChangeQuestionInput = (e) => {
    //     onChangeQuestion(question_id, e.target.value)
    // }

    const onChangeQuestionInput = (jodit_content) => {
        onChangeQuestion(question_id, jodit_content)
    }

    const handleOnChangeSelect = (e) => {
        onChangeQuestionType(question_id, e.target.value)
    }

    const handleChangeOption = (e, option_idx) => {
        onChangeOption(question_id, option_idx, e.target.value)
    }

    const handleChangeAnswer = (e, option_idx) => {
        console.log(' e.target.value handleChangeAnswer', e.target.value)
        onChangeAnswer(question_id, option_idx)
    }

    const handleDeleteOption = (e, option_idx) => {
        onDeleteOption(question_id, option_idx)
    }

    const renderQuestionBody = () => {
        let body
        let showAddMore = false
        if (question.questionType == "checkbox" || question.questionType == "radio") {
            showAddMore = true
            body = question.options.map((q_op, idx) => {
                return (
                    <div key={idx} className={`question-body--option ${q_op.isCorrect ? "question-body--option__correct" : ""}`}>
                        {question.questionType == 'radio' ?
                            <CircleOutlinedIcon className='question-body--option__icon' /> :
                            <CheckBoxOutlineBlankOutlinedIcon className='question-body--option__icon' />
                        }
                        <input type='text'
                            className='question-body--option__input'
                            placeholder='Option'
                            name={`${q_op.optionText}_${idx}`}
                            value={q_op.optionText}
                            onChange={(e) => handleChangeOption(e, idx)}
                        />
                        <IconButton
                            color={`${q_op.isCorrect ? "success" : ""}`}
                            onClick={(e) => handleChangeAnswer(e, idx)}>
                            <CheckOutlined />
                        </IconButton>

                        <IconButton onClick={(e) => handleDeleteOption(e, idx)}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                )
            })
        }
        let add_more = (
            <div className="question-body--option question-body--add-more" onClick={onAddOption}>
                <CircleOutlinedIcon className='question-body--option__icon' />
                <input type='text' className='question-body--option__input' placeholder='Add Option' disabled />
            </div>
        )

        return (
            <>
                {body}
                {showAddMore && add_more}
            </>
        )
    }
    const renderQuestionFooter = () => {
        return (
            <div className="question-footer">
                <div className="quesstion-footer--answer-key">
                    <Button> Answer key </Button>
                    <span> (0 points) </span>
                </div>
                <div className="question-footer--actions">
                    <Tooltip title="Duplicate">
                        <IconButton>
                            <ContentCopySharpIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton>
                            <DeleteOutlineIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="More options">
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </Tooltip>
                </div>

            </div>

        )
    }

    return (
        <div className="question-container">
            <div className="question-header">
                <div className="question-header--input">
                    <JoditExample
                        init_value={question.questionText}
                        placeholder='Question'
                        custom_config={{ readonly: false }}
                        handleOnBlur={onChangeQuestionInput}
                    />
                </div>

                {(question["questionType"] != "description") && (
                    <>
                        <div className="question-header--icon">
                            <CropOriginalIcon />
                        </div>
                        <Select
                            className='question-header--select'
                            value={question['questionType']}
                            onChange={(e) => handleOnChangeSelect(e)}
                            SelectDisplayProps={{
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                }
                            }}
                        >
                            <MenuItem value="text"> <SubjectIcon style={{ 'marginRight': '10px' }} /> Paragraph  </MenuItem>
                            <MenuItem value="checkbox"> <CheckBoxOutlinedIcon style={{ 'marginRight': '10px' }} /> Checkboxes </MenuItem>
                            <MenuItem value="radio"> <RadioButtonCheckedOutlinedIcon style={{ 'marginRight': '10px' }} /> Multiple Choice </MenuItem>
                        </Select>
                    </>
                )}


            </div>
            <div className="question-body">
                {/* {question.questionType == "checkbox" && <QuestionCheckboxForm options={question.options} />} */}

                {renderQuestionBody()}
            </div>

            {renderQuestionFooter()}

        </div>
    )
}

export default QuestionItem