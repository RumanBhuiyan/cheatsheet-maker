import React,{useContext, useState} from 'react'
import AddPDFStyles from './addpdf.module.css'
import Styles from '../ThreeButtons/threebuttons.module.css'
import {TextContext} from '../../index'

function AddPDF() {
   
    const {titles,textNotes,codeNotes,editorType,setTextNotes,textareaValue,setTextAreaValue,codeareaValue,setCodeAreaValue,setCodeNotes} = useContext(TextContext)

    const addNode = async () => {
        if ((titles.length === codeNotes.length + 1)|| (titles.length === textNotes.length + 1)){
            if (editorType == 'Write Your Note'){
                if(textareaValue.length){
                        await setTextNotes(nodes => [
                            ...nodes,
                            { id : nodes.length + 1,
                             content : textareaValue }
                        ])
                       await setTextAreaValue('')
                    }
            }else if (editorType == 'Write Your Code'){
               if(codeareaValue.length){
                    await setCodeNotes(codes => [
                        ...codes,
                        {
                            id : codes.length + 1,
                            code : `<pre>${codeareaValue}</pre>`
                        }
                    ])
                   await setCodeAreaValue('')
                  }
            }else return
        }else{
            alert('Enter title first before writing Note or code')
         }
    }

    return (
        <div className={`${AddPDFStyles.btnbg} flex justify-center align-middle`}>
            <button className={`${Styles.mybutton}`} onClick={addNode}>Add To PDF</button>
        </div>
    )
}

export default AddPDF
