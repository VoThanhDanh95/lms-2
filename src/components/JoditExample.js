import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const JoditExample = ({ init_value, placeholder='', custom_config={}, handleOnBlur = () => console.log('') }) => {
    const editor = useRef(null);
    const [content, setContent] = useState(init_value);

    const config = {
        buttons: [
            'bold',
            'underline',
            'italic', '|',
            'paragraph',
            'align', 'undo', 'redo', '|',
        ],
        "showCharsCounter": false,
        "showWordsCounter": false,
        "showXPathInStatusbar": false,
        toolbarAdaptive: false,
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        // style: {
        //     background: '#27272E',
        //     color: 'rgba(255,255,255,0.5)',
        //     border: '10px solid red'
        // },

        ...custom_config
    }

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => handleOnBlur(newContent)} // preferred to use only this option to update the content for performance reasons
            // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => { }}
        />
    );
};

export default JoditExample