import React,{useContext, useState} from 'react'
import Styles from './index.module.css'
import Head from 'next/head'
import TextEditor from './TextEditor'
import CodeEditor from './CodeEditor'
import {TextContext} from '../../index'

function Dropdown() {
    const [display , setDisplay ] = useState('hidden')
    const {editorType , setEditorType} = useContext(TextContext)

    const toggleDropdown = () => {
         setDisplay(display => display === 'hidden' ? 'block' : 'hidden')
    }

    const getEditor = async (type) => {
        if (type == 'first'){
           await setEditorType ('Write Your Note')
        }else if (type == 'second'){
           await setEditorType('Write Your Code')
        }else {
           await setEditorType('')
        }
        toggleDropdown()
    }

    return (
        <>
         {/* Adding font awesome link tag  */}
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head>

        <div className={`flex flex-col text-center`}>
            <div className={`${Styles.first} w-60 h-10 p-2 rounded-md m-auto`}
                onClick={toggleDropdown}>
                Select Editor Type 
                <i className={`ml-2 fa fa-arrow-down`}></i>
            </div>
            <div className={`${Styles.second} w-60 h-10 p-2 m-auto ${display}`}
             onClick={()=>getEditor('first')}>
                Write Note</div>
            <div className={`${Styles.third} w-60 h-10 p-2 m-auto ${display}`}
             onClick={()=>getEditor('second')}>
                Write Code</div>
        </div>
        {
            editorType === 'Write Your Note' && <TextEditor text={editorType} />
        }
        {
            editorType === 'Write Your Code' && <CodeEditor text={editorType} />
        }
        </>
    )
}

export default Dropdown
