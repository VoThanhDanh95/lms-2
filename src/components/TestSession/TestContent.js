import './style.scss'
import JoditExample from '../JoditExample'
import AnswerForm from './AnswerForm'

function TestContent({ itemsRef, passage_content, passage_input }) {
    return (
        <div className="content-wrapper">
            <div className="passage-area">
                <JoditExample
                    init_value={passage_content}
                    custom_config={{ readonly: true, toolbar: false }}
                />
            </div>

            <div className="passage-answer-form">
                <AnswerForm itemsRef={itemsRef} list_question={passage_input} />

                {/* <ul>
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
                </ul> */}
            </div>
        </div>
    )
}

export default TestContent
