import React from 'react'
import ThreeButtonStyles from './threebuttons.module.css'

function MyButton({name}) {
    return (
     <button className={`${ThreeButtonStyles.mybutton}`}>
         {name}
    </button>
    )
}

export default MyButton
