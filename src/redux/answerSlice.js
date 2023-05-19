import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        qid: 1,
        pid: 1,
        answer: ''
    },
    {
        qid: 2,
        pid: 1,
        answer: ''
    },
    {
        qid: 3,
        pid: 1,
        answer: ''
    },
    {
        qid: 4,
        pid: 1,
        answer: ''
    }
]

export const answerSlice = createSlice({
    name: 'answer',
    initialState,
    reducers: {
        updateAnswer: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            const answer_idx = action.payload.qid || 1
            const new_answer = action.payload.value || 'default updated value'
            state[answer_idx]['answer'] = new_answer
        }
    }
})

// Action creators are generated for each case reducer function
export const { updateAnswer } = answerSlice.actions

export default answerSlice.reducer
