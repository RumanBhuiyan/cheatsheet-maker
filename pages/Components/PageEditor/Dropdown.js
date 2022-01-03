import React,{useState} from 'react'
import Styles from './index.module.css'
import Head from 'next/head'
import TextEditor from './TextEditor'
import CodeEditor from './CodeEditor'

function Dropdown() {
    const [display , setDisplay ] = useState('hidden')
    const [editorType , setEditorType] = useState('')

    const toggleDropdown = () => {
        setDisplay(display => display === 'hidden' ? 'block' : 'hidden')
    }

    const getEditor = (type) => {
        if (type == 'first'){
            setEditorType ('Write Note')
        }else if (type == 'second'){
            setEditorType('Write Code')
        }else {
            setEditorType('')
        }
        toggleDropdown()
    }

    return (
        <>
         {/* Adding font awesome link tag  */}
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
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
            editorType === 'Write Note' && <TextEditor />
        }
        {
            editorType === 'Write Code' && <CodeEditor />
        }
        </>
    )
}

export default Dropdown
