import React from 'react'
import PageEditorStyles from './index.module.css'
import Head from 'next/head'
import Dropdown from './Dropdown'

function index() {
    return (
        <>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css" integrity="sha512-IgmDkwzs96t4SrChW29No3NXBIBv8baW490zk5aXvhCD8vuZM3yUSkbyTBcXohkySecyzIrUwiF/qV0cuPcL3Q==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>
            <div className={`${PageEditorStyles.editorbg}`}>
                <Dropdown />
            </div>
        </>
    )
}

export default index

