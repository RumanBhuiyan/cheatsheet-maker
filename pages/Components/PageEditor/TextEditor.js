import React from 'react'
import Styles from './index.module.css'

function TextEditor({text}) {
    return (
        <div className={`${Styles.texteditor} flex justify-center`}>
           <div className={`field w-6/12`}>
            <div className={`control`}>
                <textarea className={`textarea is-large`} placeholder={text}></textarea>
            </div>
            </div>
        </div>
    )
}

export default TextEditor
