import React, { useContext ,useRef} from 'react'
import mindImage from './mind.png'
import Image from 'next/image'
import Styles from './title.module.css'
import {TextContext} from '../../index'

function Title() {

    const titleRef = useRef()
    const {setTitles} = useContext(TextContext)

    const storeTitle = async () => {
        if (titleRef.current.value.length){
            await setTitles(titles => [
                ...titles, 
                {
                    id : titles.length + 1,
                    title : titleRef.current.value
                }
            ])
            titleRef.current.value = ''
        }
    }

    return (
        <div className={`${Styles.titlebg} flex justify-center`}>
            <Image src={mindImage} alt='mindImage' width="50" height="40" />
            <input ref={titleRef} className={`input is-success w-6/12`} type="text" placeholder="Enter Title"></input>
            <button onClick={storeTitle}  className={`${Styles.titlebtn} w-2/12`}>Add Title</button>
        </div>
    )
}

export default Title
