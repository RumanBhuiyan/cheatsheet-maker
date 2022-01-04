import React from 'react'
import Styles from './index.module.css'
import {mycolors} from './MyColors'

function index({id,title}) {
    return (
        <div className={`${Styles.headerbg} flex justify-center`}>
            <div className={`${Styles.spane} w-4/12`} style={{backgroundColor : mycolors[Math.floor(Math.random() * (31 - 1 + 1) + 1)]}}>
                <span className={`${Styles.number}`} style={{backgroundColor : mycolors[id]}}>{id}</span>
                <span className={`${Styles.title}`}>{title}</span>
             </div>
        </div>
    )
}

export default index
