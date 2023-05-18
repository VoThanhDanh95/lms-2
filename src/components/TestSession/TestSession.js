// import styles from './TestSession.module.scss'
import TestContent from "./TestContent"
import TestTracking from "./TestTracking"
import './style.scss'
import { useState, useRef } from 'react'
import Button from "../Button/Button"
import { SECTION_LIST } from '../GoogleForm/fakeData'

function TestSession() {
    const itemsRef = useRef(new Map());
    const [answerMap, setAnswerMap] = useState({})

    const [selectedPassage, setSelectedPassage] = useState(0)
    const passage_content = SECTION_LIST[selectedPassage]["content"]
    const passage_input = SECTION_LIST[selectedPassage]["question-list"]
    let all_question = [];
    SECTION_LIST.map((ele, idx) => {
        let count_q = 0
        ele['question-list'].map((input, _) => {
            count_q += 1
            if (input["questionType"] == "checkbox") {
                for (let i=0; i<input["questionType"]; i++) {
                    
                }
                all_question.push({
                    ...input,
                    passage_id: idx,
                    qid: count_q
                })
            }
        })
    })


    return (
        <div className='test-wrapper'>
            <div className="test-header">
                <h3 className="lession-title">
                    C17 IELTS reading test 2
                    <span><button>Thoát</button></span>
                </h3>

                <div className="collection-title">
                    <h4>Bộ đề thi: IELTS C17 Full Test 2</h4>
                </div>
            </div>
            <div className="passage-selection">
                <Button primary onClick={() => setSelectedPassage(0)}> Passage 1 </Button>
                <Button primary onClick={() => setSelectedPassage(1)}> Passage 2 </Button>
                <Button primary onClick={() => setSelectedPassage(2)}> Passage 3 </Button>
            </div>
            <div className="test-body">
                <TestContent 
                    itemsRef={itemsRef}
                    passage_content={passage_content}
                    passage_input={passage_input}
                    />
                <TestTracking itemsRef={itemsRef} all_question={all_question} selectedPassage={selectedPassage} setSelectedPassage={setSelectedPassage}/>
            </div>

            <div className="test-footer">
                <h1>hello footer here</h1>
                <h1>hello footer here</h1>
            </div>
        </div>
    )
}

export default TestSession