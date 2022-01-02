import React from 'react'
import MyButton from './MyButton'
import ThreeButtonStyles from './threebuttons.module.css'

function index() {
    return (
        <div className={`${ThreeButtonStyles.buttonsbg} flex justify-evenly align-middle`}>
            {
                ['Import PDF','View PDF','Download PDF'].map(name => {
                    return <MyButton key={name} name={name} />
                })
            }          
        </div>
    )
}

export default index
