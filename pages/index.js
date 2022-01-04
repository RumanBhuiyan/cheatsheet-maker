import Logo from "./Components/Logo";
import PageImage from './Components/PageImage'
import ThreeButtons from './Components/ThreeButtons'
import AddPdf from './Components/AddPdf/AddPDF'
import PageEditor from './Components/PageEditor'
import Title from './Components/Title/Title'
import React, { useEffect, useState } from "react";

export const TextContext = React.createContext()

export default function Home() {

  const [textNotes , setTextNotes] = useState([])
  const [titles , setTitles] = useState([])
  const [textareaValue , setTextAreaValue] = useState('')

  // useEffect(()=>{
  //   console.log(titles)
  // },[titles])

  return (
    <div>
     <Logo />
     <PageImage />
     <ThreeButtons />
     <TextContext.Provider value={{textNotes,setTextNotes,textareaValue , setTextAreaValue,titles,setTitles}}>
       <Title />
     {/* <div id="target" className={`flex flex-col`}>
        {
          textNotes.map(node => { 
            return <div className={`${globalStyles.homeeditor} mt-2 text-center`} key={node.id}>{node.content}</div>
          })
        }
     </div> */}
     
          <PageEditor />
          <AddPdf />
      </TextContext.Provider>
    </div>
  )
}
