import React from 'react'
import JoditExample from '../components/JoditExample'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counterSlice'

function Home() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(incrementByAmount(4))}
                >
                    Increment by amount {count}
                </button>
            </div>
            <JoditExample />
        </>
    )
}

export default Home
