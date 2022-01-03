import React,{useContext} from 'react'
import Styles from './index.module.css'
import { TextContext  } from '../../index'

function TextEditor({text}) {
    const {textareaValue,setTextAreaValue} = useContext(TextContext)

    const setValue = (event) => {
        setTextAreaValue(event.target.value)
    }

    return (
        <div className={`${Styles.texteditor} flex justify-center`}>
           <div className={`field w-8/12`}>
            <div className={`control`}>
                <textarea value={textareaValue} onChange={(e)=>setValue(e)} className={`textarea is-large`} placeholder={text}></textarea>
            </div>
            </div>
        </div>
    )
}

export default TextEditor
