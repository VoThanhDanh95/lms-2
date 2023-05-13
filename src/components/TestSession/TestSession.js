// import styles from './TestSession.module.scss'
import TestContent from "./TestContent"
import TestTracking from "./TestTracking"
import './style.scss'
import { useState, useRef } from 'react'
import Button from "../Button/Button"

function TestSession() {
    const itemsRef = useRef(new Map());
    const [selectedPassage, setSelectedPassage] = useState(0)
    const session_input = [
        {
            "content": "This is test paragraph 1",
            "list_input": [
                {
                    "id": 1,
                    "type": "text",
                },
                {
                    "id": 2,
                    "type": "text",
                },
                {
                    "id": 3,
                    "type": "text",
                },

            ]
        },
        {
            "content": "This is test paragraph 2",
            "list_input": [
                {
                    "id": 4,
                    "type": "text",
                },
                {
                    "id": 5,
                    "type": "text",
                },
                {
                    "id": 6,
                    "type": "text",
                },
                {
                    "id": 7,
                    "type": "text",
                },

            ]
        },
        {
            "content": "This is test paragraph 3",
            "list_input": [
                {
                    "id": 8,
                    "type": "text",
                },
                {
                    "id": 9,
                    "type": "text",
                },
                {
                    "id": 10,
                    "type": "text",
                },
                {
                    "id": 11,
                    "type": "text",
                },
                {
                    "id": 12,
                    "type": "text",
                },

            ]
        },
    ]
    const passage_content = session_input[selectedPassage]["content"]
    const passage_input = session_input[selectedPassage]["list_input"]

    let all_input = [];
    session_input.map((ele, idx) => {
        ele['list_input'].map((input, _) => {
            all_input.push({
                ...input,
                page: idx
            })
        })
        // all_input = all_input.concat(...[ele['list_input'], 'page': idx])
    })

    console.log('all_input ', all_input)

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
                    // all_input={all_input}
                    passage_content={passage_content}
                    passage_input={passage_input}
                    />
                <TestTracking itemsRef={itemsRef} all_input={all_input} selectedPassage={selectedPassage} setSelectedPassage={setSelectedPassage}/>
            </div>

            <div className="test-footer">
                <h1>hello footer here</h1>
                <h1>hello footer here</h1>
            </div>
        </div>
    )
}

export default TestSession