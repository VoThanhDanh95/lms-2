import { AddCircleOutline, FileUploadOutlined, TextFieldsOutlined } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import React from 'react'


const ActionControl = ({ onAddQuestion }) => {

    return (
        <div className="question-action-control">
            <Tooltip title="New Question">
                <IconButton onClick={(e) => onAddQuestion()}>
                    <AddCircleOutline className='question-action-control--icon'  />
                </IconButton>
            </Tooltip>

            <Tooltip title="Upload File">
                <IconButton>
                    <FileUploadOutlined className='question-action-control--icon' />
                </IconButton>
            </Tooltip>

            <Tooltip title="Description">
                <IconButton>
                    <TextFieldsOutlined className='question-action-control--icon' />
                </IconButton>
            </Tooltip>


        </div>
    )
}

export default ActionControl