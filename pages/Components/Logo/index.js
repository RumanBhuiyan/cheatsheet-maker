import React from 'react'
import cheatSheetLogo from '../../../public/logo.jpg'
import Image from 'next/image'
import logoStyles from './logo.module.css'

function Logo() {
    return (
        <>
            <div className={`${logoStyles.logo} flex items-center justify-center`}>
                <div>
                    <Image className={`rounded-2xl`} src={cheatSheetLogo} alt='cheatSheetLogo' width='140' height='110'/> 
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#012a35" fillOpacity="1" d="M0,256L48,261.3C96,267,192,277,288,245.3C384,213,480,139,576,144C672,149,768,235,864,245.3C960,256,1056,192,1152,138.7C1248,85,1344,43,1392,21.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
        </>
    )
}

export default Logo
