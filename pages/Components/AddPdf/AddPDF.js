import React,{useContext} from 'react'
import AddPDFStyles from './addpdf.module.css'
import Styles from '../ThreeButtons/threebuttons.module.css'
import {TextContext} from '../../index'

function AddPDF() {
   
    const {setTextNotes,textareaValue,setTextAreaValue} = useContext(TextContext)

    const addNode = async () => {
        if(textareaValue.length){
            await setTextNotes(nodes => [
                ...nodes,
                { id : nodes.length + 1,
                 content : textareaValue }
            ])
            setTextAreaValue('')
        }
    }

    return (
        <div className={`${AddPDFStyles.btnbg} flex justify-center align-middle`}>
            <button className={`${Styles.mybutton}`} onClick={addNode}>Add To PDF</button>
        </div>
    )
}

export default AddPDF
