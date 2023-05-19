// import styles from './TestSession.module.scss'
import { flushSync } from 'react-dom'
import useCountDown from '../../hooks/countDown'
import './style.scss'

function TestTracking({
    itemsRef,
    all_answer,
    selectedPassage,
    setSelectedPassage
}) {
    const [remainingMinute, remainingSecond] = useCountDown(3)
    const padZero = (num) => {
        return num < 10 ? '0' + num : num
    }

    function scrollToId(itemId) {
        const node = itemsRef.current.get(itemId)
        node.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
        node.classList.remove('blink')
        setTimeout(function () {
            node.classList.add('blink')
        }, 10)
    }

    const handleButtonClick = (e, answer) => {
        // if (answer.page !== selectedPassage) {
        //     flushSync(() => {
        //         setSelectedPassage(answer.page)
        //     });
        // }
        scrollToId(answer.qid)
        if (!e.target.className.includes('active')) {
            e.target.classList.add('active')
        } else {
            e.target.classList.remove('active')
        }
    }

    return (
        <section className="tracking-wrapper">
            <p>Thời gian làm bài</p>
            <h3>
                {' '}
                <span>{padZero(remainingMinute)}</span> :{' '}
                <span>{padZero(remainingSecond)}</span>
            </h3>
            <a>Khôi phục bài làm</a>
            <div className="passage-answer">
                <h2 className="passage-title">Passage 1</h2>
                <div className="list-answer">
                    {all_answer.map((answer, index) => {
                        return (
                            <span
                                key={index}
                                className="answer-item"
                                onClick={(e) => handleButtonClick(e, answer)}
                            >
                                {answer.qid}
                            </span>
                        )
                    })}
                </div>

                {/* <h2 className="passage-title">Passage 2</h2>
                <div className="list-answer">
                    {dummy_arr.map(x => {
                        return (<span className='answer-item'>0{x}</span>)
                    })}
                </div> */}
            </div>
        </section>
    )
}

export default TestTracking
