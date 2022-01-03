import Logo from "./Components/Logo";
import PageImage from './Components/PageImage'
import ThreeButtons from './Components/ThreeButtons'
import AddPdf from './Components/AddPdf/AddPDF'
import PageEditor from './Components/PageEditor'
import React, { useEffect, useState } from "react";
import globalStyles from '../styles/Home.module.css'

export const TextContext = React.createContext()

export default function Home() {

  const [textNotes , setTextNotes] = useState([])
  const [textareaValue , setTextAreaValue] = useState('')

  useEffect(()=>{
    console.log(textNotes)
  },[textNotes])

  return (
    <div>
     <Logo />
     <PageImage />
     <ThreeButtons />
     <div id="target" className={`flex flex-col`}>
        {
          textNotes.map(node => { 
            return <div className={`${globalStyles.homeeditor} mt-2 text-center`} key={node.id}>{node.content}</div>
          })
        }
     </div>
      <TextContext.Provider value={{textNotes,setTextNotes,textareaValue , setTextAreaValue}}>
          <PageEditor />
          <AddPdf />
      </TextContext.Provider>
    </div>
  )
}
