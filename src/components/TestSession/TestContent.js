// import styles from './TestSession.module.scss'
import { useState } from "react"
import { TextField } from '@mui/material';
// import Grid from "@mui/material/Grid";

function TestContent({ itemsRef, passage_content, passage_input }) {
    return (
        <div className="content-wrapper">
            
            <div className="passage-area">
                {passage_content}
            </div>

            <div className="passage-answer">
                <ul>
                    {passage_input.map((answerBox, index) => (
                        <li key={index}
                            ref={(node) => {
                                // const map = getMap()
                                if (node) {
                                    itemsRef.current.set(answerBox.id, node)
                                } else {
                                    itemsRef.current.delete(answerBox.id)
                                }
                            }}
                        >
                            <input style={{ border: '2px solid black' }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TestContent