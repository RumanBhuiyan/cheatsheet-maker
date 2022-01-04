import React from 'react'
import Image from 'next/image'
import pageMidImage from '../../../public/cheatsheet1.jpg'
import pageImageStyles from './pageImage.module.css'

function index() {
    return (
        <>
            <div>
                <Image src={pageMidImage} alt='pageMidImage' priority={true}/>
            </div>
            <div className={`${pageImageStyles.wave}`}>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,700 C 0,700 0,350 0,350 C 141.7333333333333,311.06666666666666 283.4666666666666,272.1333333333333 434,298 C 584.5333333333334,323.8666666666667 743.8666666666668,414.5333333333333 913,434 C 1082.1333333333332,453.4666666666667 1261.0666666666666,401.73333333333335 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" strokeWidth="0" fill="#012a35ff" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
            </div>
        </>
    )
}

export default index
