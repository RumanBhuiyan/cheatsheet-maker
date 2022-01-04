import Logo from "./Components/Logo";
import PageImage from './Components/PageImage'
import ThreeButtons from './Components/ThreeButtons'
import AddPdf from './Components/AddPdf/AddPDF'
import PageEditor from './Components/PageEditor'
import Title from './Components/Title/Title'
import React, { useEffect, useState } from "react";
import ShowTitle from "./Components/ShowTitle/";

export const TextContext = React.createContext()

export default function Home() {

  const [editorType , setEditorType] = useState('')
  const [titles , setTitles] = useState([])
  const [textNotes , setTextNotes] = useState([])
  const [codeNotes , setCodeNotes] = useState([])
  const [textareaValue , setTextAreaValue] = useState('')
  const [codeareaValue , setCodeAreaValue] = useState('')

  // useEffect(()=>{
  //   console.log(titles)
  //   console.log(textNotes)
  //   console.log(codeNotes)
  // },[titles,textNotes,codeNotes])

  return (
    <div>
     <Logo />
     <PageImage />
     <ThreeButtons />
     {
       titles.map(title => {
         return <ShowTitle key={title.id} id={title.id} title={title.title} />
       })
     }
     <TextContext.Provider value={{editorType , setEditorType,textNotes,setTextNotes,textareaValue , setTextAreaValue,titles,setTitles,codeNotes , setCodeNotes,codeareaValue , setCodeAreaValue}}>
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
