import React, { useContext } from 'react'
import Styles from './index.module.css'
import {TextContext} from '../../index'

function CodeEditor({text}) {

    const {setCodeAreaValue} = useContext(TextContext)

    const setValue = async (event) => {
        if (event.target.value.length){
            await setCodeAreaValue(event.target.value)
        }
    }

    return (
        <div className={`${Styles.codeeditor} flex justify-center`}>
           <div className={`field w-8/12`}>
            <div className={`control`}>
                <textarea onChange={e=>setValue(e)}  className={`textarea is-large`} placeholder={text}></textarea>
            </div>
            </div>
        </div>
    )
}

export default CodeEditor
