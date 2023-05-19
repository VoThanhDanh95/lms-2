import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import answerReducer from './answerSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        answer: answerReducer,
    }
})
