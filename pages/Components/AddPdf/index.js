import React from 'react'
import MyButton from  '../ThreeButtons/MyButton'
import AddPDFStyles from './addpdf.module.css'

function index() {
    return (
        <div className={`${AddPDFStyles.btnbg} flex justify-center align-middle`}>
           <MyButton name="Add To PDF" /> 
        </div>
    )
}

export default index
